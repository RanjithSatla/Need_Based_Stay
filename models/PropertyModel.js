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
    contentType: String,
  },
  description: String,
});
module.exports = mongoose.model("Property", propertySchema);
