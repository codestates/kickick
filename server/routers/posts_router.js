const { get_posts_info } = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_posts_info);

module.exports = router;
