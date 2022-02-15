const verifySignUp = require("../middlewares/verifySignup");
const controller = require("../controllers/authController");
// const express = require("express");
// const router = express.Router();
module.exports = function(app){
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.post(
      "/auth/signup",
      [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
      ],
      controller.createUser
    );
    app.post("/auth/signin", controller.signIn);
    
};