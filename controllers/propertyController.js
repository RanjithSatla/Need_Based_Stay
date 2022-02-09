const Property = require("../models/PropertyModel");

//create Property :

const createProperty = async (req, res, next) => {
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
    nearBy: req.body.nearBy,
    description: req.body.description,
  });
  try {
    const propertyData = await property.save();
    console.log(propertyData);
    res.status(201).json({
      message: "Handling Post requests to /listProperty",
      CreatedProperty: propertyData,
    });
  } catch (error) {
    console.log("error");
    res.status(500).json({ message: "an error occurred", error: error });
  }
};

// Update Property :

const updateProperty = (req, res, next) => {
  const id = req.params.propertyId;
  console.log(id);
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Property.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

// Delete Property :

const deleteProperty = (req, res, next) => {
  const id = req.params.propertyId;
  console.log(id);
  Property.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

module.exports = { createProperty, updateProperty, deleteProperty };
