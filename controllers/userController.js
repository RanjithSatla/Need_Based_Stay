const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = (req, res, next) => {
  // bcrypt.hash(req.body.password, 10, function(err, hashedPass){

  // if (err) {
  //     res.json({
  //         error:err
  //     })
  // }
  // })
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    phoneNumber: req.body.phoneNumber,
    userName: req.body.userName,
    password: req.body.password,
  });
  try {
    const userData = user.save();
    res.json(userData);
  } catch (error) {
    res.json({
      message: "An error occurred",
    });
  }
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
    (user) => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({ error: err });
          }
          if (result) {
            let token = jwt.sign({ name: user.name });
            res.json({
              message: "Login Successful",
              token, //(acc to es6 js rules we can write it in single)
            });
          }
        });
      } else {
        res.json({
          message: "User not found",
        });
      }
    }
  );
};
module.exports = { createUser, login };
