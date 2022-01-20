const express = require("express");
const Router = require("express");
//controllers
const userController = require("../controllers/userController");
const User = require("../models/userModel");

const router = express.Router();

//user signup
router.post("/user/signup", async (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    phoneNumber: req.body.phoneNumber,
    userName: req.body.userName,
    password: req.body.password,
  });
  try {
    const userData = await user.save();
    res.json(userData);
  } catch (error) {
    res.json({
      message: "An error occurred",
    });
  }
});

//user login
router.post("/user/login", userController.login);

module.exports = router;
