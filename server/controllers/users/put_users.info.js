const { users } = require("../../models");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
  // TODO 유저 정보 수정 구현
  // 토큰이 없으면 실패
  // 토큰으로 type, username 뽑아냄
  if (!req.cookies.token) {
    return res.status(401).json({ data: null, message: "권한이 없습니다." });
  }

  const token = req.cookies.token.access_token;
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ data: err, message: "토큰이 만료되었습니다." });
  }
  // 토큰은 유효, 토큰으로 유저정보 수정
  const { username } = decoded;
  try {
    await users.update(
      {
        ...req.body,
        kick_money: sequelize.literal(`kick_money + ${req.body.kick_money}`),
      },
      {
        where: {
          username: username,
        },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
