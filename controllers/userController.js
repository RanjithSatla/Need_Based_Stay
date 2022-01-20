const User = require("../models/userModel");

const createUser = async (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailId: req.body.emailId,
    phoneNumber: req.body.phoneNumber,
    userName: req.body.userName,
    password: req.body.password,
  });
  try {
    const userData = await user.save();
    console.log(userData);
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

  User.findOne({ userName: username }, function (error, foundUser) {
    if (!error) {
      if (foundUser) {
        //----compare passwords-----//
        if (foundUser.password == password) {
          //password matches
          res.json("Content Page");
        } else {
          res.json("Check your password !!!");
        }
        //---end checking password compraison
      } else {
        res.json("You've not been registered as a user. Please do SignUp !!!");
      }
    } else {
      res.json(error);
    }
  });
};
module.exports = { createUser, login };
