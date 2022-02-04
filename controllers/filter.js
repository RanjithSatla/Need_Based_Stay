const { query } = require("express");
const Property = require("../models/PropertyModel");

// Filter controller

// Gender Filter
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
    .exec(function (err, Property) {
      if (err) return handleError(err);
      else {
        console.log(Property);
        return res.json(Property);
        // res.send(Property);
      }
    });
  // } else {
  //   const near = filter.nearBy;
  //   console.log(near);
  //   delete filter.nearBy;
  //   const nearBy = near;
  //   console.log(filter);
  //   console.log(nearBy);
  //   const query = Property.find(filter, {
  //     nearBy: { $in: ["airport", "parks"] },
  //   })
  //     .select("propertyName propertyLocation  uploadImages gender description")
  //     .exec(function (err, Property) {
  //       if (err) return handleError(err);
  //       else {
  //         console.log(Property);
  //         return res.json(Property);
  //         // res.send(Property);
  //       }
  //     });
  // }
};

// Prefered for
const locationFilter = async (req, res, next) => {
  const location = await req.body.location;
  const query = Property.find({ propertyLocation: location })
    // .where("propertyLocation")
    // .equals("Uppal")
    //.select("propertyName propertyLocation uploadImage nearBy description")

    .exec(function (err, Property) {
      if (err) return handleError(err);
      else {
        // res.send(Property);
        return res.json(Property);
      }
    });
};

module.exports = { filterAll, locationFilter };
