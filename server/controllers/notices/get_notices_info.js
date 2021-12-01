const { notices } = require("../../models");

module.exports = async (req, res) => {
  // TODO 공지 정보 (단독) 요청 구현
  if (!req.query.notice_id) {
    return res
      .status(400)
      .json({ data: null, message: "notice_id가 누락되었습니다." });
  }
  const notice_id = req.query.notice_id;
  let data;
  try {
    data = await notices.findOne({
      where: {
        id: notice_id,
      },
    });
    data = data.get({ plain: true });
    delete data.userId;

    // id 명시적으로
    if (data) {
      data.notice_id = data.id;
      delete data.id;
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
