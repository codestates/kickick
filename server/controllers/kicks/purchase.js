const {
  users,
  posts,
  kicks,
  comments,
  likes,
  favorites,
  users_kicks,
  posts_tags,
  tags,
  alarms,
  logs,
  notices,
} = require("../../models");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
  // TODO kick 구매 api 구현
  if (!req.body.kick_id) {
    return res
      .status(400)
      .json({ data: null, message: "kick_id가 누락되었습니다." });
  }

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

  const { username } = decoded;
  const kick_id = req.body.kick_id;
  console.log(typeof kick_id);
  console.log(kick_id);
  let data;

  try {
    let user_info = await users.findOne({
      attributes: [["id", "user_id"], "kick_money"],
      where: {
        username: username,
      },
      raw: true,
    });
    const user_id = user_info.user_id;

    // 킥머니가 100보다 적으면 구매 불가
    if (user_info.kick_money < 100) {
      return res
        .status(400)
        .json({ data: null, message: "킥머니가 부족합니다." });
    }

    // users_kicks 검색해서 이미 샀는지 확인 겸 추가
    let kick_info = await users_kicks.findOrCreate({
      attributes: ["user_id", "kick_id"],
      where: {
        user_id: user_id,
        kick_id: kick_id,
      },
      defaults: {
        user_id: user_id,
        kick_id: kick_id,
      },
    });
    data = kick_info[0].get({ plain: true });
    console.log(data);
    delete data.id;
    delete data.kickId;
    delete data.userId;

    if (!kick_info[1]) {
      return res
        .status(400)
        .json({ data: null, message: "이미 구매한 킥입니다." });
    }

    const change = -100;

    // kick_money 변동
    await users.update(
      {
        kick_money: sequelize.literal(`kick_money + ${change}`),
      },
      {
        where: {
          username: username,
        },
      }
    );

    // log에 기록
    await logs.create({
      user_id: user_id,
      type: "kick_money",
      content: `킥구매로 ${Math.abs(change)} 킥머니를 사용했습니다.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: data, message: "ok" });
};
