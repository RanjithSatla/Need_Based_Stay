const Owner = require("../models/ownerModel");

const createOwner = async (req, res, next) => {
  const owner = new Owner({
    firstName:      req.body.firstName,
    lastName:       req.body.lastName,
    emailId:        req.body.emailId,
    phoneNumber:    req.body.phoneNumber,
    userName:       req.body.userName,
    password:       req.body.password,
  });
  try {
    const ownerData = await owner.save();
    console.log(ownerData);
    res.json(ownerData);
  } catch (error) {
    res.json({
      message: "An error occurred",
    });
  }
};

const ownerLogin = (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  Owner.findOne({ userName: username }, function (error, foundOwner) {
    if (!error) {
      if (foundOwner) {
        //----compare passwords-----//
        if (foundOwner.password == password) {
          //password matches
          res.json("Content Page");
        } else {
          res.json("Check your password !!!");
        }
        //---end checking password compraison
      } else {
        res.json("You've not been registered as a owner. Please do SignUp !!!");
      }
    } else {
      res.json(error);
    }
  });
};
module.exports = { createOwner, ownerLogin };
