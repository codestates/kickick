const { posts, posts_tags, tags } = require("../../models");

module.exports = async (req, res) => {
  // TODO 태그 정보 조회 구현

  if (!req.query.post_id) {
    return res
      .status(400)
      .json({ data: null, message: "post_id가 누락되었습니다." });
  }

  let data;
  const post_id = Number(req.query.post_id);

  try {
    data = await posts.findOne({
      attributes: ["id"],
      where: {
        id: post_id,
      },
      include: [
        {
          model: posts_tags,
          attributes: ["tag_id"],
          where: {
            post_id: post_id,
          },
          include: [
            {
              model: tags,
              attributes: ["id", "content"],
            },
          ],
        },
      ],
    });
    data = data.get({ plain: true });
    // data 가공
    console.log(data);
    data = data.posts_tags.map((el) => el.tag);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
