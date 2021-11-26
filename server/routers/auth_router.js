const { signin } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signin", signin);

module.exports = router;
