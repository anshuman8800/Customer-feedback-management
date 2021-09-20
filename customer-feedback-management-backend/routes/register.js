const express = require("express");
const router = express.Router();
const database = require("../database");

/* GET home page. */
router.post("/", async function (req, res) {
  console.log(req.body); //Important step for view data
  const { name, email, password } = req.body;
  try {
    const rates = await database("Login").select();
    console.log(rates);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", function (req, res) {
  res.send("My registere page");
});

module.exports = router;
