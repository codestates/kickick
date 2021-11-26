const {
  users,
  posts,
  kicks,
  comments,
  likes,
  favorites,
  users_kicks,
  posts_tags,
  tags,
  alarms,
  logs,
  notices,
} = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 회원탈퇴 구현
  if (!req.cookies.token) {
    return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
  }

  const token = req.cookies.token.access_token;
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ data: err, message: "토큰이 만료되었습니다." });
  }

  const { username } = decoded;

  try {
    await users.destroy({
      where: {
        username: username,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(200).json({ data: null, message: "ok" });
};
