const express = require("express");
//controllers
const ownerController = require("../controllers/ownerController");

//Auth middleware
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();
const Owner = require("../models/ownerModel");

//user signup
router.post("/owner/signup", ownerController.createOwner);

//user login
router.post("/owner/login", ownerController.login);

router.delete("/user/:userId", checkAuth, ownerController.deleteOwner);

module.exports = router;
