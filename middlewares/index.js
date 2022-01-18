const { cors } = require("./cors");
const { parseURI, parseJSON } = require("./body-parser");

exports.middlewares = [cors, parseURI, parseJSON];
