const { get_posts_info, get_posts_list } = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_posts_info);
router.get("/list", get_posts_list);

module.exports = router;
