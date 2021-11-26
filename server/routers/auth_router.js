const { duplication_check, signin, signout } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signin", signin);
router.post("/duplication-check", duplication_check);
router.post("/signout", signout);

module.exports = router;
