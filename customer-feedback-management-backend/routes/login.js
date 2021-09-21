const express = require("express");
const { default: knex } = require("knex");
const router = express.Router();
const database = require("../database");

/* GET home page. */
router.post("/", async function (req, res) {
  // console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await database.select().from("Login").where("email", email);
    if (user.length == 0) {
      res.send({ message: "User not registered" });
    } else if (user[0].password != password) {
      res.send({ message: "Password didn't match" });
    } else {
      res.send({ message: "Login Successfull", user: user });
    }
  } catch (err) {
    res.send(err);
  }
});

router.post("/saveFeedback", async function (req, res) {
  console.log(req.body);
  const { email_box, message_box } = req.body;

  try {
    await database("Login")
      .where("email", email_box)
      .update("message", message_box)
      .then(res.send({ pass: 1 }));
  } catch (err) {
    res.send({ pass: 0 });
  }
});

router.get("/", function (req, res) {
  res.send("My login page");
});

module.exports = router;
