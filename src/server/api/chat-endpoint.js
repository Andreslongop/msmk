const express = require("express");
const router = express.Router();

router.get("/chat/test", function(req, res, next) {
  res.send("test chat");
});

module.exports = router;