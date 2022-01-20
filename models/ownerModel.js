const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  phoneNumber: Number,
  userName: String,
  password: String,
});
module.exports = mongoose.model("Owner", ownerSchema);
