const {
  get_kicks_info,
  post_kicks_info,
  put_kicks_info,
  delete_kicks_info,
} = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/info", get_kicks_info);
router.post("/info", post_kicks_info);
router.put("/info/:kick_id", put_kicks_info);
router.delete("/info/:kick_id", delete_kicks_info);

module.exports = router;
