const Owner = require("../models/ownerModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createOwner = async (req, res, next) => {
  Owner.find({ emailId: req.body.emailId })
    .exec()
    .then((owner) => {
      if (owner.length >= 1) {
        return res.status(409).json({
          message: "Mail Exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new Owner({
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
                console.log(result);
                return res.status(201).json({
                  message: "Owner Created",
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
      }
    });
};

const deleteOwner = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Owner Deleted",
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "An error occurred",
        error: error,
      });
    });
};

const login = (req, res, next) => {
  // var username = req.body.username;
  // var password = req.body.password;

  Owner.findOne({ userName: req.body.username })
    .exec()
    .then((owner) => {
      if (owner.length < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      } else {
        console.log(owner.password);
        console.log(req.body.password);
        bcrypt.compare(req.body.password, owner.password, (err, result) => {
          if (err) {
            console.log(err);
            return res.status(401).json({
              message: "Auth Failed",
            });
          } else if (result) {
            console.log(result);
            const token = jwt.sign(
              {
                email: owner.emailId,
                userId: owner._id,
              },

              process.env.JWT_KEY,
              {
                expiresIn: "8h",
              }
            );
            console.log(jwt.verify(token, process.env.JWT_KEY));
            console.log(token);
            return res.status(200).json({
              message: "Auth Successful",
              token: token,
            });
          } else {
            // console.log("Test");
            return res.status(401).json({
              message: "Auth Failed",
            });
          }
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

module.exports = { createOwner, login, deleteOwner };
