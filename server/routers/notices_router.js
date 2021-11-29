const { get_notices_info, post_notices_info } = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_notices_info);
router.post("/info", post_notices_info);

module.exports = router;
