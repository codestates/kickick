const { users, posts, comments } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 댓글 정보 구현
  // post_id 가 있을 때 한 게시글의 댓글 정보
  if (req.query.post_id) {
    let data;
    const post_id = req.query.post_id;

    try {
      data = await posts.findOne({
        attributes: ["id"],
        where: {
          id: post_id,
        },
        include: [
          {
            model: comments,
            attributes: [["id", "comment_id"], "content", "created_at"],
            include: [
              {
                model: users,
                attributes: ["username", "profile"],
              },
            ],
          },
        ],
      });
      data = data.get({ plain: true }).comments;
    } catch (err) {
      console.log(err);
      return res.status(500).json({ data: err, message: "데이터베이스 에러" });
    }
    return res.status(200).json({ data: data, message: "ok" });
  }

  // post_id 가 없을 때 쿠키로 내 댓글정보만
  if (!req.cookies.token) {
    return res
      .status(400)
      .json({ data: null, message: "post_id와 토큰이 존재하지 않습니다." });
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
  const { username } = decoded;

  try {
    data = await users.findOne({
      attributes: ["id", "username", "profile"],
      where: {
        username: username,
      },
      include: [
        {
          model: comments,
          attributes: ["post_id", "content", "created_at"],
          include: [
            {
              model: posts,
              attributes: ["post_name"],
            },
          ],
        },
      ],
    });
    data = data.get({ plain: true });
    delete data.id;
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
