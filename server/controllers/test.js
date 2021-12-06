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
  const input = req.body.input;
  function createFuzzyMatcher(input) {
    // escapeRegExp는 lodash에서 가져옴
    const pattern = input.split("").map(escapeRegExp).join(".*?");
    console.log(pattern);
    console.log(typeof pattern);
    return pattern;
  }
  let data = createFuzzyMatcher(input);
  console.log(data);
  console.log(typeof data);
  return res.status(200).json({ data: data, message: "ok" });
};
