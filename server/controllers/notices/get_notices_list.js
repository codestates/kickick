const { users, notices } = require("../../models");

module.exports = async (req, res) => {
  // TODO 공지 리스트 요청 구현

  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

  let data;
  try {
    data = await notices.findAll({
      attributes: [
        "id",
        "user_id",
        "type",
        "notice_name",
        "thumbnail",
        "summary",
        "content",
        "created_at",
      ],
      include: {
        model: users,
        attributes: ["username"],
      },
      offset: limit * (page_num - 1),
      limit: limit,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
