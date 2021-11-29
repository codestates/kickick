const { get_comments_info, post_comments_info } = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_comments_info);
router.post("/info", post_comments_info);

module.exports = router;
