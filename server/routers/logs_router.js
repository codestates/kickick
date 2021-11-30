const { get_logs_info } = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_logs_info);

module.exports = router;
