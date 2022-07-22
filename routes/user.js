const express = require("express");
const route = express.Router();
const user = require("../controller/userController");

route.get("/newuser", user.userController);
route.post("/register", user.newUser);

route.get('/profile/:id', user.profileController)

route.get("/edit/:id", user.getEditData);

route.post('/edit/:id', user.postEditData)

route.post('/delete/:id', user.deleteUserProfile)
module.exports = route;
