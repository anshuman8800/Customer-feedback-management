const express = require("express");
const router = express.Router();
const database = require("../database");

/* GET home page. */
router.post("/", async function (req, res) {
  // console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await database.select().from("Login").where("email", email);
    if (user.length == 0) {
      res.send({message: "User not registered"})
    } else if (user[0].password != password) {
      res.send({ message: "Password didn't match"})
    } else {
      res.send({message: "Login Successfull", user: user})
    }
  } catch (err) {
    res.send(err)
  }
});

router.get("/", function (req, res) {
  res.send("My login page");
});

module.exports = router;
