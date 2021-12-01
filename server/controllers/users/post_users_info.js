const { users } = require("../../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = async (req, res) => {
  // TODO 회원가입 구현
  // username email password 필수
  // email 인증요청 구현
  if (!(req.body.username && req.body.email && req.body.password)) {
    return res.status(400).json({
      data: null,
      message: "username, email, password 중 누락된 항목이 있습니다.",
    });
  }
  try {
    // 비밀번호 해싱
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ data: null, message: "데이터베이스 에러" });
      }

      await users.create({
        ...req.body,
        password: hash,
      });
    });

    // TODO 인증 메일 보내기 차후 구현
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: null, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
