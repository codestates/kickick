const { users, logs } = require("../../models");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
  // TODO 유저 정보 수정 구현
  // 토큰이 없으면 실패
  // 토큰으로 type, username 뽑아냄
  if (!req.cookies.token) {
    return res
      .status(400)
      .json({ data: null, message: "토큰이 존재하지 않습니다." });
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
  const change = Number(req.body.kick_money);
  try {
    // 유저 정보 업데이트 전에 킥머니 변경이 이루어지는지 확인
    if (req.body.kick_money) {
      // 킥머니 0미만이 되는지 확인부터
      let user_info = await users.findOne({
        attributes: [["id", "user_id"], "kick_money"],
        where: {
          username: username,
        },
      });
      user_info = user_info.get({ plain: true });
      const kick_money = user_info.kick_money;
      const user_id = user_info.user_id;

      if (kick_money + change < 0) {
        return res
          .status(400)
          .json({ data: null, message: "킥머니가 부족합니다." });
      }

      // 킥머니 변동 로그 남김
      let text;
      if (change > 0) {
        text = `${change} 킥머니를 받았습니다.`;
      } else {
        text = `${Math.abs(change)} 킥머니를 사용하였습니다.`;
      }

      await logs.create({
        user_id: user_id,
        type: "kick_money",
        content: text,
      });
    }
    // 유저정보 수정
    let update_obj = { ...req.body };
    // kick_money 변경이 있다면
    if (change) {
      update_obj.kick_money = sequelize.literal(`kick_money + ${change}`);
    }

    await users.update(update_obj, {
      where: {
        username: username,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
