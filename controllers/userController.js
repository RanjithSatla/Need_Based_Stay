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

  User.findOne({ userName: req.body.username }). exec ((error, foundUser) => {
    if (!error) {
      if (foundUser) {
        //----compare passwords-----//
        if (foundUser.password == password) {
          //password matches
          res.json("Content Page");
          s;
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
 // emailId
  User.findOne({
   emailId: req.body.emailId}).exec((error, foundUser) => {
     if (error) {
       res.status(500).send({ message: error });
       return;

     }
     if (foundUser) {
       res.status(200).send({ message: "user found by mail"});
     } else {
       res.json("You've not been registered as a user. Please do SignUp !!!");
     }

  next()     
   });

};

module.exports = { createUser, login };
