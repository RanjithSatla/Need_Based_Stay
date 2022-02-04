const Property = require("../models/PropertyModel");

//createProperty
const createProperty = async (req, res, next) => {
  if(!ownerLogin) {
    return res.status(422).json({ message : 'owner should be logged in' });
}

  const property = new Property({
    propertyName: req.body.propertyName,
    propertyLocation: req.body.propertyLocation,
    propertyType: req.body.propertyType,
    locationType: req.body.locationType,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    preference: req.body.preference,
    roomType: req.body.roomType,
    houseType: req.body.houseType,
    priceRange: req.body.priceRange,
    houseFor: req.body.houseFor,
    uploadImages: req.body.uploadImages,
    description: req.body.description,
  });
  try {
    const propertyData = await property.save();
    console.log(propertyData);
    res.json(propertyData);
  } catch (error) {
    console.log("error");
    res.json({ message: "an error occurred" });
  }
};







module.exports = { createProperty };
