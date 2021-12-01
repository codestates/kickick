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

module.exports = async (req, res) => {
  // TODO 게시글 목록 조회 구현

  // page_num과 limit 기본값 설정
  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

  // TODO 쿼리가 존재하면 쿼리로 검색

  if (req.query.category) {
    // req.query.category 검색 필요

    let data;

    try {
      data = await posts.findAll({
        attributes: [
          "id",
          "category",
          "post_name",
          "content",
          "cost",
          "view_count",
          "created_at",
        ],
        where: {
          category: req.query.category,
        },
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
  }
  // TODO 쿼리가 없으면 쿠키로 검색 (쿠키로만 검색하는건 내 게시글 목록)
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
              // include: [
              //   {
              //     model: users,
              //     attributes: ["username", "profile", "created_at"],
              //   },
              // ],
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

    // id 명시적으로
    // post.post_id = post.id;
    // delete post.id;
    // if (post.kick) {
    //   post.kick.kick_id = post.kick.id;
    //   delete post.kick.id;
    // }
  });

  return res.status(200).json({ data: data, message: "ok" });
};
