const express = require('express');
const route = express.Router();
const authController = require('../controller/authController')

route.get('/login', authController.getLoginController);
route.post('/login', authController.postLoginController);
module.exports = route;