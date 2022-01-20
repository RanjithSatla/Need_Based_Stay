const express = require("express");
//controllers
const userController = require("../controllers/userController");

const router = express.Router();

//user signup
router.post("/owner/signup", userController.createOwner);

//user login
router.get("/owner/login", userController.findOwner);
