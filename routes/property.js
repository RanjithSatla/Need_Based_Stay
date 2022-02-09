const express = require("express");
//controllers
const listingProperty = require("../controllers/propertyController");

const router = express.Router();
const Property = require("../models/PropertyModel");

//createProperty
router.post("/owner/listproperty", listingProperty.createProperty);
router.patch("/property/:propertyId", listingProperty.updateProperty);
router.delete("/property/:propertyId", listingProperty.deleteProperty);

module.exports = router;
