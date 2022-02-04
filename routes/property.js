const express = require("express");
//controllers
const listingProperty = require("../controllers/propertyController");

const router = express.Router();
const Property = require("../models/PropertyModel");

//createProperty
router.post("/owner/listproperty", listingProperty.createProperty);
router.get("/pg");


module.exports = router;
