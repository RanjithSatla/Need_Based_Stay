const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailId: req.body.emailId,
        password: hash,
        phoneNumber: req.body.phoneNumber,
        userName: req.body.userName,
      });

      user
        .save()
        .then((result) => {
          return res.status(201).json({
            message: "User Created",
            UserDetails: result,
          });
        })
        .catch((error) => {
          res.json({
            message: "An error occurred",
            error: error,
          });
        });
    }
  });
};

const login = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ userName: req.body.username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      }
    })
    .catch((error) => {
      console.log("error");
      res.status(500).json({
        message: "an error occurred",
        error: error,
      });
    });
};

//(error, foundUser) => {
//   if (!error) {
//     if (foundUser) {
//       //----compare passwords-----//
//       if (foundUser.password == password) {
//         //password matches
//         res.json("Content Page");
//         s;
//       } else {
//         res.json("Check your password !!!");
//       }
//       //---end checking password compraison
//     } else {
//       res.json("You've not been registered as a user. Please do SignUp !!!");
//     }
//   } else {
//     res.json(error);
//   }
// });
// // emailId
// User.findOne({
//   emailId: req.body.emailId,
// }).exec((error, foundUser) => {
//   if (error) {
//     res.status(500).send({ message: error });
//     return;
//   }
//   if (foundUser) {
//     res.status(200).send({ message: "user found by mail" });
//   } else {
//     res.json("You've not been registered as a user. Please do SignUp !!!");
//   }

//   next();
// });

module.exports = { createUser, login };
