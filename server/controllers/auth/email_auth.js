const { users } = require("../../models");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
  // TODO 이메일 인증 구현
  if (!req.body.username) {
    return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
  }

  try {
    // req.body.username 으로 users 검색해서
    // 존재하지 않으면 400 보내기 구현 필
    await users.update(
      {
        type: "general",
        kick_money: sequelize.literal(`kick_money + 1000`),
      },
      {
        where: {
          username: req.body.username,
        },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
