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
const Op = sequelize.Op;

module.exports = async (req, res) => {
  // TODO 추천 게시글 구현
  if (!req) {
    return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
  }

  // page_num과 limit 기본값 설정
  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

  // 오늘의 킥과 추천 게시글 따로 구현
  // 오늘의 킥
  // 최근 3일간 조회수 가장 높은 거 보여줌
  // 게시글 데이터 최근 3일간 가져오기
  // 조회수 기준으로 sort

  const today = new Date();
  const prev_3days = today.setDate(today.getDate() - 3);

  let data;
  try {
    data = await posts.findAll({
      attributes: [["id", "post_id"], "category", "post_name", "view_count"],
      where: {
        created_at: {
          [Op.gt]: prev_3days,
        },
      },
      offset: limit * (page_num - 1),
      limit: limit,
      order: [["view_count", "DESC"]],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ data: err, message: "데이터베이스 에러" });
  }

  // 추천
  // 토큰으로 user 정보 받아와서 log 확인
  // type이 get_post 인것들만 받아옴
  // 받아온 게시글 정보로 게시글들의 태그 확인하고 태그 개수 구함
  // 많이 중복된 태그 위주로

  // if (!req.cookies.token) {
  //   return res
  //     .status(400)
  //     .json({ data: null, message: "토큰이 존재하지 않습니다." });
  // }

  // const token = req.cookies.token.access_token;
  // let decoded;
  // try {
  //   decoded = jwt.verify(token, process.env.ACCESS_SECRET);
  // } catch (err) {
  //   console.log(err);
  //   return res
  //     .status(401)
  //     .json({ data: err, message: "토큰이 만료되었습니다." });
  // }

  // try {
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  // }
  // console.log(data);

  return res.status(200).json({ data: data, message: "ok" });
};
