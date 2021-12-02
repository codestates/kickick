const { users, posts, posts_tags, tags } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO 게시글에 태그 달기 구현
  if (!(req.body.post_id && req.body.content)) {
    return res.status(400).json({
      data: null,
      message: "post_id, content 중 누락된 항목이 있습니다.",
    });
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
  const post_id = req.body.post_id;
  const content = req.body.content;
  let data;

  try {
    // 토큰의 username으로 user_id 구함
    let user_info = await users.findOne({
      attributes: ["id"],
      where: {
        username: username,
      },
    });

    const user_id = user_info.get({ plain: true }).id;

    // user_id 가 post_id로 구한 post의 user_id 와 같은지 확인
    let post_info = await posts.findOne({
      attributes: ["user_id"],
      where: {
        id: post_id,
      },
    });
    post_info.get({ plain: true });

    // 다르면 권한 x
    if (user_id !== post_info.user_id) {
      return res.status(401).json({ data: err, message: "권한이 없습니다." });
    }

    // 작성한 태그가 이미 존재하는지부터 확인
    let tag_info = await tags.findOrCreate({
      where: {
        content: content,
      },
      defaults: {
        content: content,
      },
    });

    // 생성될 때는 배열로 들어오므로 분기 합쳐줌
    if (Array.isArray(tag_info)) {
      tag_info = tag_info[0];
    }

    // tag_id 와 post_id로 posts_tags에 추가
    // 똑같은 태그를 또 추가하는 경우를 피하기 위해 findOrCreate 사용
    tag_info = tag_info.get({ plain: true });
    const tag_id = tag_info.id;

    await posts_tags.findOrCreate({
      where: {
        post_id: post_id,
        tag_id: tag_id,
      },
      defaults: {
        post_id: post_id,
        tag_id: tag_id,
      },
    });
    data = tag_info;

    // id 명시적으로
    data.tag_id = data.id;
    delete data.id;
  } catch (err) {
    console.log(err);
    return res.status(500).json({ data: err, message: "데이터베이스 에러" });
  }

  return res.status(201).json({ data: data, message: "ok" });
};
