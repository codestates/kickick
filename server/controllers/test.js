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
} = require("./../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = async (req, res) => {
  // TODO
  let data;
  try {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ data: null, message: "데이터베이스 에러" });
      }

      data = await users.create({
        ...req.body,
        password: hash,
      });
    });
  } catch (err) {
    console.log(err);
  }
  // data = data.get({ plain: true });
  console.log(data);

  return res.status(200).json({ data, message: "ok" });
  return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
};
