const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  propertyName: String,
  propertyLocation: String,
  propertyType: Number,
  locationType: String,
  phoneNumber: Number,
  PriceRange: Number,
  uploadImages: {
    data: Buffer,
    contentType: String,
  },
  description: String,
});
module.exports = mongoose.model("OwnerProperty", propertySchema);
