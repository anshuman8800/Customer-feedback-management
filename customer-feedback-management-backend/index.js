const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const path = require("path");
require("dotenv").config();

const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.get("/", function (req, res) {
  res.send("MY API");
});

app.listen(8000, () => {
  console.log("Using dynamic port ", 8000);
});

module.exports = app;
