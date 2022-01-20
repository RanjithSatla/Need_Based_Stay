const express = require("express");
const Router = require("express");
//controllers
const userController = require("../controllers/userController");
const User = require("../models/userModel");

const router = express.Router();

//user signup
router.post("/user/signup", userController.createUser);
//user login
router.post("/user/login", userController.login);

module.exports = router;
