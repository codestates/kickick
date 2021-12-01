const { users, notices } = require("../../models");

module.exports = async (req, res) => {
  // TODO 공지 리스트 요청 구현

  // page_num과 limit 기본값 설정
  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

  let data;
  try {
    data = await notices.findAll({
      attributes: [
        ["id", "notice_id"],
        "user_id",
        "type",
        "notice_name",
        "thumbnail",
        "summary",
        // "content",
        "created_at",
      ],
      include: {
        model: users,
        attributes: ["username"],
      },
      offset: limit * (page_num - 1),
      limit: limit,
    });

    // id 명시적으로
    // data = data.map((el) => {
    //   el = el.get({ plain: true });
    //   el.notice_id = el.id;
    //   delete el.id;
    //   return el;
    // });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
