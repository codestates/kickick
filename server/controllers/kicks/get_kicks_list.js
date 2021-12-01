const { users, posts, kicks, users_kicks } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 내가 구매한 킥 리스트 구현

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

  // page_num과 limit 기본값 설정
  const page_num = Number(req.query.page_num) || 1;
  const limit = Number(req.query.limit) || 10;

  const { username } = decoded;
  let data;
  try {
    // 토큰의 username으로 kick 정보 구함
    data = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
      include: [
        {
          model: users_kicks,
          attributes: ["kick_id"],
          offset: limit * (page_num - 1),
          limit: limit,
          include: [
            {
              model: kicks,
              attributes: [
                "id",
                "post_id",
                "thumbnail",
                "content",
                "created_at",
                "updated_at",
              ],
              include: [
                {
                  model: posts,
                  attributes: ["user_id", "post_name"],
                  include: [
                    {
                      model: users,
                      attributes: ["username", "profile"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    // 데이터 가공
    data = data.get({ plain: true }).users_kicks;
    data = data.map((el) => {
      if (el.kick) {
        el.kick.user = el.kick.post.user;
        el.kick.post_name = el.kick.post.post_name;
        delete el.kick.post;
        // id 명시적으로
        el.kick.kick_id = el.kick.id;
        delete el.kick.id;
        return el.kick;
      }
    });

    // id 명시적으로
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: data, message: "ok" });
};
