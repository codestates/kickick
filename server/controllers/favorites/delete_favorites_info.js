const { users, favorites } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 즐겨찾기 삭제 구현
  if (!req.params.favorite_id) {
    return res
      .status(400)
      .json({ data: null, message: "favorite_id가 누락되었습니다." });
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
  const favorite_id = req.params.favorite_id;

  try {
    // 토큰으로 user_id, forvorite_id 로 즐겨찾기 정보 구함
    let user_info = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
    });
    const user_id = user_info.get({ plain: true }).id;

    let favorite_info = await favorites.findOne({
      attributes: ["user_id"],
      where: {
        id: favorite_id,
      },
    });
    if (!favorite_info) {
      return res
        .status(400)
        .json({ data: null, message: "존재하지않는 즐겨찾기입니다." });
    }
    favorite_info = favorite_info.get({ plain: true });

    // 즐겨찾기의 user_id와 일치하는지 확인
    if (user_id !== favorite_info.user_id) {
      return res.status(401).json({ data: null, message: "권한이 없습니다." });
    }

    // 즐겨찾기 삭제
    await favorites.destroy({
      where: {
        id: favorite_id,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: null, message: "ok" });
};
