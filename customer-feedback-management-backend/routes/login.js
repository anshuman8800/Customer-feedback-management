const express = require("express");
const router = express.Router();

/* GET home page. */
router.post("/", function (req, res) {
  res.send("post req of login page");
});

router.get("/", function (req, res) {
  res.send("My login page");
});

module.exports = router;