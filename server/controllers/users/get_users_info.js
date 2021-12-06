const { users, logs } = require("../../models");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = async (req, res) => {
  // TODO 유저정보 조회
  // query 있으면 query로 검색 (email / username)
  // 없으면 token 내용으로

  // page_num과 limit 기본값 설정
  const page_num = req.query.page_num || 1;
  const limit = req.query.limit || 10;

  // email 또는 username 으로 검색
  if (req.query.email || req.query.username) {
    // where_obj로 분기 구현
    let where_obj;
    if (req.query.email) {
      where_obj = {
        email: {
          [Op.like]: `%${req.query.email}%`,
        },
      };
    }
    if (req.query.username) {
      where_obj = {
        username: {
          [Op.like]: `%${req.query.username}%`,
        },
      };
    }

    let data;
    try {
      data = await users.findAll({
        attributes: [
          "type",
          "username",
          "email",
          "profile",
          "birthday",
          "kick_money",
        ],
        where: where_obj,
        offset: limit * (page_num - 1),
        limit: limit,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: err, message: "데이터베이스 에러" });
    }
    return res.status(200).json({ data: data, message: "ok" });
  }

  // req.cookies.token 으로 유저 정보 조회
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
  const { username, type } = decoded;

  // type guest 일 때,
  if (type === "guest") {
    try {
      data = await users.findOne({
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
          username: username,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: err, message: "데이터베이스 에러" });
    }
    return res.status(400).json({ data: data, message: "guest login" });
  }
  let data;
  try {
    data = await users.findOne({
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
        username: username,
      },
    });
    data = data.get({ plain: true });

    // today_login false면 로그에 기록
    if (req.query.today_login === "false") {
      // await logs.create({
      //   user_id: data.user_id,
      //   type: "signin",
      //   content: `${data.username}님이 로그인 하였습니다.`,
      // });
      // 수정 예정
      // log 살펴보고 오늘 로그인한 기록이 있는지 확인
      // 그에 따라 로그에 기록할지말지 결정
      // 로그에 기록하게 되면 킥머니도 지급해야함
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
