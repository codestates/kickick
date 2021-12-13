const axios = require("axios");
const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO google 소셜로그인 구현
  // req.body.code 에 담겨서 옴
  // 환경변수 받아옴

  if (!req.body.access_token) {
    return res
      .status(400)
      .json({ data: null, message: "access_token이 누락되었습니다." });
  }

  let access_token = req.body.access_token;
  let data;
  try {
    // 토큰으로 유저정보 요청
    let user_info = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo?access_token=" +
        access_token,
      {
        headers: {
          authorization: `token ${access_token}`,
          accept: "application/json",
        },
      }
    );
    console.log(user_info);

    user_info = user_info.data;
    data = await users.findOrCreate({
      attributes: [
        ["id", "user_id"],
        "type",
        "username",
        "email",
        "profile",
        "birthday",
        "kick_money",
      ],
      where: {
        email: user_info.email,
      },
      defaults: {
        type: "google",
        email: user_info.email,
        username: `google ${user_info.id}`,
        kick_money: 1500,
      },
    });
    data = data[0].get({ plain: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: null, message: "데이터베이스 에러" });
  }
  // 토큰 발급
  access_token = jwt.sign(
    {
      type: data.type,
      username: data.username,
    },
    process.env.ACCESS_SECRET,
    {
      expiresIn: "3d",
    }
  );
  return res
    .status(201)
    .cookie(
      "token",
      { access_token },
      {
        httpOnly: true,
      }
    )
    .json({ data: data, message: "ok" });
};
