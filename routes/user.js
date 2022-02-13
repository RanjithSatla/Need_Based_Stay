const verifySignUp = require("../middlewares/verifySignup");
const express = require("express");
// console.log(verifySignUp);
//controllers
//const userController = require("../controllers/userController");
const controller = require("../controllers/authController");
const router = express.Router();

router.use ((res,req,next) =>{
 res.header(
  "Access-Control-Allow-Headers",
  "x-access-token, Origin, Content-Type, Accept"

  );
  next();
});



//user signup
router.post(
  "/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  controller.createUser
);
//user login
router.post("/auth/signin", controller.signIn);

module.exports = router;
