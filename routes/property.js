const express = require("express");
//controllers
const listingProperty = require("../controllers/propertyController");

const router = express.Router();

//createProperty
router.post("/owner/listproperty", listingProperty.createProperty);
router.get("/property/:propertyId", listingProperty.individualProperty);
router.patch("/property/:propertyId", listingProperty.updateProperty);
router.delete("/property/:propertyId", listingProperty.deleteProperty);

module.exports = router;
