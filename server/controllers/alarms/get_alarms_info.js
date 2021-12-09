const { users, alarms } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 알림 정보 조회 구현

  if (!req.cookies.token) {
    return res
      .status(400)
      .json({ data: null, message: "토큰이 존재하지 않습니다." });
  }

  // page_num과 limit 기본값 설정
  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

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

  const { username } = decoded;
  let data = new Object();

  try {
    let user_info = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
      include: [
        {
          model: alarms,
          attributes: [
            ["id", "alarm_id"],
            "type",
            "reference",
            "content",
            "is_checked",
            "created_at",
          ],
          offset: limit * (page_num - 1),
          limit: limit,
        },
      ],
    });
    user_info = user_info.get({ plain: true });
    // user_info 가공
    data.alarms = [];
    if (user_info.length !== 0) {
      user_info = user_info.alarms.map((el) => {
        el.reference = JSON.parse(el.reference);
        return el;
      });
      data.alarms = user_info;
    }

    // 공지 알림 구함
    let notice_alarms = await alarms.findAll({
      attributes: [
        ["id", "alarm_id"],
        "type",
        "reference",
        "content",
        "is_checked",
        "created_at",
      ],
      offset: limit * (page_num - 1),
      limit: limit,
      where: {
        type: "notices",
      },
    });

    // notice_alarms 가공
    data.notices = [];
    console.log(notice_alarms);
    if (notice_alarms.length !== 0) {
      notice_alarms = notice_alarms.map((el) => {
        el = el.get({ plain: true });
        el.reference = JSON.parse(el.reference);
        return el;
      });
      data.notices = notice_alarms;
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
