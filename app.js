require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const mainRouter = require("./routes/homeRouter");
const userRouter = require("./routes/user");
const authRouter = require('./routes/login');

app.use(bp.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(mainRouter);
app.use(userRouter);
app.use(authRouter)

app.set("view engine", "ejs");
app.set("views", "pages");

mongoose
  .connect(process.env.MONGOOSE_PATH)
  .then(() => {
    app.listen(process.env.port || 3000, () => {
      console.log("Server port " + process.env.port + " deer ajillaj bna");
    });
  })
  .catch((err) => console.log(err));
