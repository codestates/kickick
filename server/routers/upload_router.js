const { upload } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/single", upload.single("img"), function (req, res, next) {
  console.log(req.file);
  // 로케이션은 db에 저장해야할 수도 있음
  res.json({ data: req.file.location, message: "ok" });
});

router.post("/array", upload.array("img"), function (req, res, next) {
  console.log(req.files);
  // 로케이션은 db에 저장해야할 수도 있음
  let data = req.files.map((el) => el.location);
  res.json({ data: data, message: "ok" });
});

module.exports = router;