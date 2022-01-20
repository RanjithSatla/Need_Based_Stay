const express = require("express");
//controllers
const ownerController = require("../controllers/ownerController");

const router = express.Router();
const Owner = require("../models/ownerModel");

//user signup
router.post("/owner/signup", ownerController.createOwner);

//user login
router.post("/owner/login", ownerController.ownerLogin);

module.exports = router;
