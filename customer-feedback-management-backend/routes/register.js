const express = require("express");
const router = express.Router();
const database = require("../database");

/* GET home page. */
router.post("/", async function (req, res) {
  // console.log(req.body); //Important step for view data
  const { name, email, password } = req.body;

  try {
    const user = await database.select().from("Login").where("email", email);
    console.log(user.length);
    if (user.length == 1) {
      // console.log("already registered");
      res.send({message: "User already registerd"});
    } else {
      await database("Login").insert({
        name: name,
        email: email,
        password: password,
      });
      // console.log("data inserted successfully");
      res.send( { message: "Successfully Registered, Please login now." })
    }
  } catch (err) {
    // console.log(err);
    res.send(err)
  }
});

router.get("/", function (req, res) {
  res.send("My registere page");
});

module.exports = router;
