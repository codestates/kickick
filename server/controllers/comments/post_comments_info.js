const { users, comments } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 댓글 생성 구현
  if (!(req.body.post_id && req.body.content)) {
    return res
      .status(400)
      .json({ data: null, message: "post_id, content 항목이 누락되었습니다." });
  }

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

  const { username } = decoded;
  let data;

  try {
    // 토큰으로 user_id 구함
    let user_info = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
    });
    const user_id = user_info.get({ plain: true }).id;

    // 댓글 생성
    data = await comments.create({
      user_id,
      ...req.body,
    });
    data = data.get({ plain: true });
    delete data.user_id;
    delete data.postId;
    delete data.userId;

    // 게시글 작성자에 알림
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }
  console.log(data);

  return res.status(201).json({ data: data, message: "ok" });
};
