var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: String,
  phoneNumber: Number,
  userName: String,
  password: String,
});
module.exports = mongoose.model("User", userSchema);
