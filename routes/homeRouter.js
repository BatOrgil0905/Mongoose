const express = require('express');
const route = express.Router();
const homepage = require("../controller/mainController")

route.get('/', homepage.homeController);
route.get("/about", homepage.about);


module.exports = route;