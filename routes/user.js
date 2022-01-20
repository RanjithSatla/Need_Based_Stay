const express = require("express");
//controllers
const userController = require("../controllers/userController");

const router = express.Router();

//user signup
router.post("/user/signup", userController.createUser);

//user login
router.get("/user/login", userController.findUser);
