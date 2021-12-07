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
const escapeRegExp = require("lodash").escapeRegExp;

module.exports = async (req, res) => {
  data = await users.findOrCreate({
    where: {
      username: "test",
    },
    default: {
      username: "no",
    },
  });
  console.log(data);
  return res.status(200).json({ data: data, message: "ok" });
};
