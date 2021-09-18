const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const createError = require("http-errors");
const path = require("path");

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

main().catch(err => console.log(err)); 
async function main() {
  await mongoose.connect(
    "mongodb://localhost:27017/myCostomerFeedbackDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("DB connected");
    }
  );
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema)



app.listen(8000, () => {
  console.log("Using dynamic port ", 8000);
});

module.exports = app;
