const express = require("express");
//controllers
const listingProperty = require("../controllers/listingProperty");

const router = express.Router();
const Property = require("../models/PropertyModel");

//createProperty
router.post("/owner/listproperty", listingProperty.createProperty);

module.exports = router;
