const { query } = require("express");
const Property = require("../models/PropertyModel");

// Filter controller

//Filter based on needs

const filterAll = (req, res, next) => {
  const filter = {
    propertyType: req.body.propertyType,
    propertyLocation: req.body.propertyLocation,
    locationType: req.body.locationType,
    gender: req.body.gender,
    preference: req.body.preference,
    roomType: req.body.roomType,
    houseType: req.body.houseType,
    houseFor: req.body.houseFor,
    nearBy: { $in: req.body.nearBy },
    description: req.body.description,
  };

  for (const key in filter) {
    if (filter[key] === undefined) {
      delete filter[key];
    }
  }

  console.log(filter.nearBy);

  const query = Property.find(filter)
    .select(
      "propertyName propertyLocation  uploadImages gender nearBy description"
    )
    .exec()
    .then((Property) => {
      if (Property.length > 0) {
        console.log(Property);
        return res.status(200).json({
          message: "Properties found based on the needs",
          Properties: Property,
        });
      } else {
        res.status(404).json({ message: "No Properties found" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

// Filter based on location

const locationFilter = async (req, res, next) => {
  const location = await req.body.location;
  const query = Property.find({ propertyLocation: location })
    .exec()
    .then((Property) => {
      if (Property.length > 0) {
        console.log(Property);
        return res.status(200).json({
          message: "Properties based on the given location",
          Properties: Property,
        });
      } else {
        res
          .status(404)
          .json({ message: "No Properties found in this location" });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

module.exports = { filterAll, locationFilter };
