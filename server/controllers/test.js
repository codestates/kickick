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
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // TODO

  console.log(req.body);

  return res.status(200).json({ data: req.body, message: "ok" });
  return res.status(400).json({ data: null, message: "잘못된 요청입니다." });
};
