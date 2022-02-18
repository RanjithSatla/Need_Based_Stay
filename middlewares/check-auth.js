const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(req.headers.authorization.split(" ")[1]);
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    console.log("Test2");
    return res.status(401).json({
      message: "Auth Failed",
    });
  }
};
