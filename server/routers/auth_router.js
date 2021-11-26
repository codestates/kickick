const { signin, duplication_check } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signin", signin);
router.post("/duplication-check", duplication_check);

module.exports = router;
