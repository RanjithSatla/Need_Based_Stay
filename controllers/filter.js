const { query } = require("express");
const Property = require("../models/PropertyModel");

// Filter controller

// Gender Filter
const genderFilter = (req, res) => {
  // const genderReq = "female";
  const filter = {
    gender: "female",
  };
  const query = Property.find()
    .where("filter")
    .equals(filter)
    .select("propertyName propertyLocation uploadImage description")
    .exec(function (err, Property) {
      if (err) return handleError(err);
      else {
        console.log(filter);
        console.log(filter);
        res.json(Property);
        // res.send(Property);
      }
    });

  // const cursor = db.collection("Property").find({
  //   gender: "male",
  // });
  // console.log(cursor);
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
        return res.send(Property);
        // res.json(Property);
      }
    });
};

// Room Type Filter
const roomTypeFilter = async (req, res) => {};
module.exports = { genderFilter, locationFilter, roomTypeFilter };
