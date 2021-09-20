const express = require("express");
const router = express.Router();
const database = require("../database");

/* GET home page. */
router.post("/", async function (req, res) {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await database.select().from("Login").where("email", email);
    if (user.length == 0) {
      console.log("Wrong email");
    } else if (user[0].password != password) {
      console.log("Wrong password");
    } else {
      console.log("successfully login");
      res.send("success");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", function (req, res) {
  res.send("My login page");
});

module.exports = router;
