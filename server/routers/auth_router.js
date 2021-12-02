const {
  duplication_check,
  signin,
  signout,
  email_auth,
} = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signin", signin);
router.post("/duplication-check", duplication_check);
router.post("/signout", signout);
router.post("/email", email_auth);

module.exports = router;
