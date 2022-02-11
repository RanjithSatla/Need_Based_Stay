const { cors } = require("./cors");
const { parseURI, parseJSON } = require("./body-parser");
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignup");
exports.middlewares = [cors, parseURI, parseJSON, authJwt, verifySignUp];
