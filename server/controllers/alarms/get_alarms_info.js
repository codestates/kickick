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
  let data;

  try {
    data = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
      include: [
        {
          model: alarms,
          attributes: [
            "id",
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
    data = data.get({ plain: true });
    // data 가공
    data = data.alarms.map((el) => {
      el.alarm_id = el.id;
      delete el.id;
      el.reference = JSON.parse(el.reference);
      return el;
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
