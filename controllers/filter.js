const { query } = require("express");
const Property = require("../models/PropertyModel");

// Filter controller

// Gender Filter
const genderFilter = (req, res) => {
  const query = Property.find()
    .where("gender")
    .equals("male")
    .select("propertyName propertyLocation uploadImage description")
    .exec(function (err, Property) {
      if (err) return handleError(err);
      else {
        // console.log(Property);
        // res.json(Property);
        res.send(Property);
      }
    });
};

// Prefered for
const preferedForFilter = async (req, res) => {};

// Room Type Filter
const roomTypeFilter = async (req, res) => {};
module.exports = { genderFilter, preferedForFilter, roomTypeFilter };
