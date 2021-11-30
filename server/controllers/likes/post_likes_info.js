const { users, likes } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 좋아요 생성 및 수정
  // 이미 존재하면 수정 / 존재하지 않으면 생성
  if (!(req.body.post_id && req.body.agreement && req.cookies.token)) {
    return res.status(400).json({
      data: null,
      message: "post_id, agreement, 토큰 중 누락된 항목이 있습니다.",
    });
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

  const { username } = decoded;
  const post_id = req.body.post_id;
  let data;

  try {
    // 토큰으로 user_id 구함
    let user_info = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
    });
    console.log(user_info);

    const user_id = user_info.get({ plain: true }).id;

    // 이미 좋아요 버튼을 누른적이 있는지 확인
    data = await likes.findOne({
      attributes: ["id"],
      where: {
        user_id: user_id,
        post_id: post_id,
      },
    });

    // 누른적 있으면 업데이트
    if (data) {
      data = data.get({ plain: true });
      await likes.update(
        {
          ...req.body,
          user_id: user_id,
        },
        {
          where: {
            id: data.id,
          },
        }
      );
      data = null;
    } else {
      // 누른 적 없으면 생성
      data = await likes.create({
        ...req.body,
        user_id: user_id,
      });
      data = data.get({ plain: true });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: data, message: "ok" });
};
