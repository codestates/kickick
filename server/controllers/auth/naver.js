const axios = require("axios");
const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 네이버 소셜로그인 구현
  const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
  const NAVER_REDIRECT_URI = process.env.NAVER_REDIRECT_URI;
  const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

  if (!(req.body.code && req.body.state)) {
    return res.status(400).json({
      data: null,
      message: "code, state 중 누락된 항목이 있습니다.",
    });
  }

  const api_url =
    "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=" +
    NAVER_CLIENT_ID +
    "&client_secret=" +
    NAVER_CLIENT_SECRET +
    "&redirect_uri=" +
    NAVER_REDIRECT_URI +
    "&code=" +
    req.body.code +
    "&state=" +
    req.body.state;
  let data;
  let access_token;
  try {
    data = await axios.get(api_url, {
      headers: {
        "X-Naver-Client-Id": NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
      },
    });
    access_token = data.data.access_token;

    user_info = await axios.get("https://openapi.naver.com/v1/nid/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    // user_info에 정보 들어옴
    const nickname = user_info.data.response.nickname;
    const email = user_info.data.response.email;
    data = await users.findOrCreate({
      attributes: [
        "type",
        "username",
        "email",
        "profile",
        "birthday",
        "kick_money",
      ],
      where: {
        email: email,
      },
      defaults: {
        type: "naver",
        username: `naver ${nickname}`,
        email: email,
        kick_money: 1500,
      },
    });
    data = data[0].get({ plain: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: null,
      message: "데이터베이스 에러",
    });
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
