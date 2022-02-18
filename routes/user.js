const express = require("express");

//controllers
const userController = require("../controllers/userController");

//Auth middleware
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

//user signup
router.post("/user/signup", userController.createUser);

//user login
router.post("/user/login", userController.login);

//user delete
router.delete("/user/:userId", checkAuth, userController.deleteUser);

module.exports = router;
