const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 이메일 인증 구현
  if (!req.body.username) {
    return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
  }
  const CLIENT_URL = process.env.CLIENT_URL;

  try {
    await users.update(
      {
        type: "general",
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
