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

  // 추천
  // 토큰으로 user 정보 받아와서 log 확인
  // type이 get_post 인것들만 받아옴
  // 받아온 게시글 정보로 게시글들의 태그 확인하고 태그 개수 구함
  // 많이 중복된 태그 위주로

  if (req.cookies.token) {
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

    // 토큰으로 로그 정보 확인
    // 로그에서 post_id 들 뽑아내고 게시글에 달린 태그 받아옴
    // 태그 정보 정리
    // 많이 나온 태그 기준 포스트 검색

    const { username } = decoded;
    let data;

    try {
      // 토큰 정보로 user_id 구함
      let user_info = await users.findOne({
        attributes: [["id", "user_id"]],
        where: {
          username: username,
        },
      });
      const user_id = user_info.get({ plain: true }).user_id;
      // user_id로 로그 정보 20개까지 구함
      let log_info = await logs.findAll({
        attributes: ["content"],
        where: {
          user_id: user_id,
          type: "get_post",
        },
        offset: 0,
        limit: 20,
        order: [["id", "DESC"]],
      });
      // 로그 정보로 post_id 구함
      log_info = log_info.map((el) => {
        el = el.get({ plain: true });
        el = JSON.parse(el.content);
        return el.post_id;
      });

      // 최근 20개 로그에 post_id가 중복되는 경우는 없다고 가정
      const tag_id_obj = [];

      for (let el of log_info) {
        // post_id로 게시글에 달린 tag_id 구함
        const post_id = el;
        let post_info = await posts.findOne({
          attributes: [["id", "post_id"]],
          where: {
            id: post_id,
          },
          include: [
            {
              model: posts_tags,
              attributes: ["tag_id"],
            },
          ],
        });
        post_info = post_info.get({ plain: true });
        post_info.posts_tags.forEach((el) => {
          // tag_id_obj.push(el.tag_id);
          tag_id_obj[el.tag_id] = tag_id_obj[el.tag_id] + 1 || 1;
        });
      }
      console.log(tag_id_obj);

      // tag_id_obj 에서 제일 높은 수치를 가진 태그로 post 검색
      // 그 값은 obj 에서 지움
      // 가져온 게 6개가 될 때까지 반복? 여기 수정 필요

      data = log_info;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: err, message: "데이터베이스 에러" });
    }
    // console.log(data);
    return res.status(200).json({ data: data, message: "ok" });
  }

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

  return res.status(200).json({ data: data, message: "ok" });
};
