const { users, logs } = require("../../models");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
  // TODO 이메일 인증 구현
  if (!req.body.username) {
    return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
  }

  try {
    // req.body.username 으로 users 검색해서
    // 존재하지 않으면 400
    let user_info = await users.findOne({
      attributes: [["id", "user_id"], "type"],
      where: {
        username: req.body.username,
      },
      raw: true,
    });
    if (!user_info) {
      return res
        .status(400)
        .json({ data: null, message: "존재하지 않는 닉네임입니다." });
    }
    if (user_info.type !== "email auth required") {
      return res
        .status(400)
        .json({ data: null, message: "이미 인증되었습니다." });
    }

    // 로그에서 signup이 있는지 확인
    let log_info = await logs.findOne({
      where: {
        user_id: user_info.user_id,
        type: "signup",
      },
    });

    // 로그 살펴보고 signup이 없으면
    if (!log_info) {
      // 유저정보 수정
      await users.update(
        {
          type: "general",
          kick_money: sequelize.literal(`kick_money + 1500`),
        },
        {
          where: {
            username: req.body.username,
          },
        }
      );

      // 회원가입 로그 추가
      await logs.create({
        user_id: data.id,
        type: "signup",
        content: "회원가입으로 1500 킥머니를 받았습니다.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
