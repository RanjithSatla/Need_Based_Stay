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

  console.log(filter);

  //Pagination
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };

  const query = Property.find(filter)
    .select(
      "propertyName propertyLocation  uploadImages gender nearBy description"
    )
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec()
    .then((Property) => {
      if (Property.length > 0) {
        console.log(Property);
        const response = {
          count: Property.length,
          Properties: Property.map((Property) => {
            return {
              propertyType: Property.propertyType,
              propertyLocation: Property.propertyLocation,
              locationType: Property.locationType,
              gender: Property.gender,
              preference: Property.preference,
              roomType: Property.roomType,
              houseType: Property.houseType,
              houseFor: Property.houseFor,
              nearBy: { $in: Property.nearBy },
              description: Property.description,
              _id: Property._id,
              request: {
                type: "GET",
                url:
                  "https://need-based-stay.herokuapp.com/property/" +
                  Property._id,
              },
            };
          }),
        };
        console.log(response);
        return res.status(200).json(response);
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
  const location = await req.body.propertyLocation;
  console.log(location);
  //Pagination
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10,
  };

  const query = Property.find({ propertyLocation: location })
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec()
    .then((Property) => {
      if (Property.length > 0) {
        console.log(Property);
        const response = {
          count: Property.length,
          Properties: Property.map((Property) => {
            return {
              propertyType: Property.propertyType,
              propertyLocation: Property.propertyLocation,
              locationType: Property.locationType,
              gender: Property.gender,
              preference: Property.preference,
              roomType: Property.roomType,
              houseType: Property.houseType,
              houseFor: Property.houseFor,
              nearBy: { $in: Property.nearBy },
              description: Property.description,
              _id: Property._id,
              request: {
                type: "GET",
                url:
                  "https://need-based-stay.herokuapp.com/property/" +
                  Property._id,
              },
            };
          }),
        };
        return res.status(200).json({
          message: `Properties based on the location: ${location}`,
          response,
        });
      } else {
        res.status(404).json({
          message: `No Properties found in ${location}`,
        });
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
