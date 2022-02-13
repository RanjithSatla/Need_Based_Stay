const { cors } = require("./cors");
const { parseURI, parseJSON } = require("./body-parser");
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

const tokenVerify = authJwt.verifyToken;
// console.log(verifySignUp);
const checkUsername = verifySignUp.checkDuplicateUsernameOrEmail;
const checkRole = verifySignUp.checkRolesExisted;
// console.log(verifySignUp);

exports.middlewares = [
  cors,
  parseURI,
  parseJSON,
  //   tokenVerify,
  //   checkUsername,
  //   checkRole,
];
