const { get_comments_info } = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_comments_info);

module.exports = router;
