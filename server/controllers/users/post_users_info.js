const { users } = require("../../models");

module.exports = async (req, res) => {
  // TODO 회원가입 구현
  // username email password 필수
  // email 인증요청 구현
  if (!(req.body.username && req.body.email && req.body.password)) {
    return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
  }
  let data;
  try {
    await users.create(req.body);
    data = await users.findOne({
      attributes: [
        "type",
        "username",
        "email",
        "profile",
        "birthday",
        "kick_money",
      ],
      where: {
        email: req.body.email,
      },
    });
    // TODO 인증 메일 보내기 차후 구현
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: null, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: data, message: "ok" });
};
