const axios = require("axios");
const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO kakao 소셜로그인 구현
  // req.body.code 에 담겨서 옴
  // 환경변수 받아옴
  const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

  if (!req.body.code) {
    return res
      .status(400)
      .json({ data: null, message: "code가 누락되었습니다." });
  }
  // url 설정
  const url = new URL("https://kauth.kakao.com/oauth/token");
  url.searchParams.append("grant_type", "authorization_code");
  url.searchParams.append("client_id", KAKAO_CLIENT_ID);
  url.searchParams.append("redirect_uri", KAKAO_REDIRECT_URI);
  url.searchParams.append("code", req.body.code);

  let access_token;
  let data;
  try {
    // 코드로 토큰 요청
    const token_info = await axios.post(url.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    access_token = token_info.data.access_token;
    // 토큰으로 유저정보 요청
    let user_info = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    user_info = user_info.data.kakao_account;
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
        type: "kakao",
        email: user_info.email,
        username: `kakao ${user_info.profile.nickname}`,
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
