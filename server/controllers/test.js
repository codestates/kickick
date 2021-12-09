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
const fuzzy_searcher = require("../functions/fuzzy_searcher");

module.exports = () => {};
