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
    console.log(user_id);
    // 킥머니가 100보다 적으면 구매 불가
    if (user_info.kick_money < 100) {
      return res
        .status(400)
        .json({ data: err, message: "킥머니가 부족합니다." });
    }
    let kick_info = await users_kicks.findOrCreate({
      where: {
        user_id: user_id,
        kick_id: kick_id,
      },
      defaults: {
        user_id: user_id,
        kick_id: kick_id,
      },
      // raw: true,
    });
    // console.log(kick_info);
    // users_kicks 검색해서 이미 샀는지 확인
    // 안샀으면 kick_money 확인
    // kick_money 여유가 되면 구매
    // users_kicks 테이블에 추가
    // log에 기록
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }
  // console.log(data);

  return res.status(200).json({ data: null, message: "ok" });
};
