const {
  users,
  posts,
  kicks,
  comments,
  likes,
  posts_tags,
  tags,
} = require("../../models");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = async (req, res) => {
  // TODO 게시글 목록 조회 구현

  // page_num과 limit 기본값 설정
  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

  if (Object.keys(req.query).length === 0) {
    // TODO 쿼리가 없으면 쿠키로 검색 (쿠키로만 검색하는건 내 게시글 목록)

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

    let data;
    let { username } = decoded;

    try {
      data = await users.findOne({
        attributes: ["id"],
        where: {
          username: username,
        },
        include: [
          {
            model: posts,
            attributes: [
              ["id", "post_id"],
              // "id",
              "category",
              "post_name",
              // "content",
              "cost",
              "view_count",
              "created_at",
            ],
            offset: limit * (page_num - 1),
            limit: limit,

            include: [
              {
                model: users,
                attributes: ["username", "profile"],
              },
              {
                model: likes,
                attributes: ["agreement"],
              },
              {
                model: kicks,
                attributes: [["id", "kick_id"], "thumbnail"],
              },
              {
                model: comments,
                attributes: [["id", "comment_id"], "content"],
              },
              {
                model: posts_tags,
                attributes: ["tag_id"],
                include: {
                  model: tags,
                  attributes: ["content"],
                },
              },
            ],
          },
        ],
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: err, message: "데이터베이스 에러" });
    }

    data = data.get({ plain: true });
    data = data.posts;

    // 각 게시물에 접근
    data.forEach((post) => {
      // likes 가공
      let likes_obj = {
        true: 0,
        false: 0,
      };
      post.likes.forEach((like) => {
        if (like.agreement) {
          likes_obj.true += 1;
        } else {
          likes_obj.false += 1;
        }
      });
      post.likes = likes_obj;

      // tags 가공
      post.tags = post.posts_tags.map((tag) => tag.tag.content);
      delete post.posts_tags;

      // comments 카운트
      post.comments = post.comments.length;
    });

    return res.status(200).json({ data: data, message: "ok" });
  }

  // TODO 쿼리가 존재하면 쿼리로 검색

  // 포함검색 구현 query 상황에 따라 where_obj 분기
  let where_obj = {};
  if (req.query.category) where_obj.category = req.query.category;
  if (req.query.post_name)
    where_obj.post_name = {
      [Op.like]: `%${req.query.post_name}%`,
    };
  if (req.query.content)
    where_obj.content = {
      [Op.like]: `%${req.query.content}%`,
    };

  let data;

  try {
    data = await posts.findAll({
      attributes: [
        ["id", "post_id"],
        "category",
        "post_name",
        "content",
        "cost",
        "view_count",
        "created_at",
      ],
      where: where_obj,
      offset: limit * (page_num - 1),
      limit: limit,
      include: [
        {
          model: users,
          attributes: ["username", "profile"],
        },
        {
          model: likes,
          attributes: ["agreement"],
        },
        {
          model: kicks,
          attributes: ["id", "thumbnail"],
        },
        {
          model: comments,
          attributes: ["id", "content"],
          include: [
            {
              model: users,
              attributes: ["username", "profile", "created_at"],
            },
          ],
        },
        {
          model: posts_tags,
          attributes: ["tag_id"],
          include: {
            model: tags,
            attributes: ["content"],
          },
        },
      ],
    });
    data = data.map((el) => el.get({ plain: true }));

    // 각 게시물에 접근
    data.forEach((post) => {
      // likes 가공
      let likes_obj = {
        true: 0,
        false: 0,
      };
      post.likes.forEach((like) => {
        if (like.agreement) {
          likes_obj.true += 1;
        } else {
          likes_obj.false += 1;
        }
      });
      post.likes = likes_obj;

      // tags 가공
      post.tags = post.posts_tags.map((tag) => tag.tag.content);
      delete post.posts_tags;
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }
  return res.status(200).json({ data: data, message: "ok" });
};
