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
  // TODO 게시글 정보(단독) 요청 구현
  if (!req.query.post_id) {
    return res
      .status(400)
      .json({ data: null, message: "post_id가 누락되었습니다." });
  }

  const post_id = Number(req.query.post_id);
  let data;

  try {
    data = await posts.findOne({
      attributes: [
        "id",
        "user_id",
        "category",
        "post_name",
        "content",
        "cost",
        "view_count",
        "created_at",
      ],
      where: {
        id: post_id,
      },
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
          model: posts_tags,
          attributes: ["tag_id"],
          include: [
            {
              model: tags,
              attributes: ["content"],
            },
          ],
        },
      ],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }
  // console.log(data);
  // console.log(data.dataValues.posts_tags);
  let tags_info = data.dataValues.posts_tags;
  tags_info = tags_info.map((el) => {
    return el.dataValues.tag.dataValues.content;
  });
  console.log(tags_info);
  // data.dataValues.posts_tags = tags_info;

  return res.status(200).json({ data: data, message: "ok" });
};
