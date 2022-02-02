const { query } = require("express");
const Property = require("../models/PropertyModel");

// Filter controller

// Gender Filter
const filterAll = (req, res, next) => {
  const filter = {
    propertyType: req.body.propertyType,
    propertyLocation: req.body.propertyLocation,
    gender: req.body.gender,
    preference: req.body.preference,
    roomType: req.body.roomType,
    houseType: req.body.houseType,
    houseFor: req.body.houseFor,
  };
  const query = Property.find(filter)
    .select("propertyName propertyLocation uploadImages gender description")
    .exec(function (err, Property) {
      if (err) return handleError(err);
      else {
        return res.json(Property);
        // res.send(Property);
      }
    });
};

// Prefered for
const locationFilter = async (req, res, next) => {
  const location = await req.body.location;
  const query = Property.find({ propertyLocation: location })
    // .where("propertyLocation")
    // .equals("Uppal")
    //.select("propertyName propertyLocation uploadImage description")

    .exec(function (err, Property) {
      if (err) return handleError(err);
      else {
        // res.send(Property);
        return res.json(Property);
      }
    });
};

module.exports = { filterAll, locationFilter };
