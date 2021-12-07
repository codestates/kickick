const {
  duplication_check,
  signin,
  signout,
  email_auth,
  naver,
  kakao,
} = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/signin", signin);
router.post("/duplication-check", duplication_check);
router.post("/signout", signout);
router.post("/email", email_auth);
router.post("/naver", naver);
router.post("/kakao", kakao);

module.exports = router;
