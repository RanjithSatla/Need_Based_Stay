const mongoose = require("mongoose");

const geoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
  },
});

const propertySchema = new mongoose.Schema({
  propertyName: String,
  propertyLocation: String,
  propertyType: {
    type: String,
    enum: ["House", "PG"],
    default: "House",
  },
  location: {
    type: geoSchema,
    index: "2dsphere",
  },
  locationType: {
    type: String,
    enum: ["city", "outskirts"],
    default: "city",
  },
  phoneNumber: Number,
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  preference: {
    type: String,
    enum: ["professionals", "students"],
    default: "students",
  },
  roomType: {
    type: String,
    enum: ["single share", "two share", "three share", "four share"],
    default: "single share",
  },
  houseType: {
    type: String,
    enum: [
      "1st floor",
      "2nd Floor",
      "3rd Floor",
      "flat",
      "independent",
      "gated community",
    ],
    default: "flat",
  },
  houseFor: {
    type: String,
    enum: ["bachelor's", "family"],
    default: "family",
  },
  priceRange: {
    type: JSON,
    range: {
      type: Number,
      min: { type: Number, min: 0 },
      max: { type: Number, min: 0 },
    },
  },
  propertyImage: {
    type: Array,
    // ('image/png'),
  },
  nearBy: {
    type: Array,
    tags: [
      "airport",
      "parks",
      "health care",
      "shopping hubs",
      "fitness centers",
    ],
  },
  description: String,
});
module.exports = mongoose.model("Property", propertySchema);
