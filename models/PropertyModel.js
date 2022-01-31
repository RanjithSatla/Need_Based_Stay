const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyName: String,
  propertyLocation: String,
  propertyType: {
    type: String,
    enum: ["Rent", "PG"],
    default: "Rent",
  },
  locationType: String,
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
    enum: ["1st floor", "2nd Floor", "3rd Floor", "flat", "independent"],
    default: "Rent",
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
  uploadImages: {
    data: Buffer,
    contentType: String, // ('image/png'),
  },
  description: String,
});
module.exports = mongoose.model("Property", propertySchema);
