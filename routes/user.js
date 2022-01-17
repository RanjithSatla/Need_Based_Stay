const express = require("express");
//controllers
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.create);
