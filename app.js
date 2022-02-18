const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const db = require("./config/db");
const passport = require('passport');
 const expressSession = require('express-session');
const flash = require('connect-flash');
const initPassport = require("./passport/passport");
initPassport(passport);
// const port = process.env.PORT || 3000;

//routes
const authRoutes = require("./routes/authRoutes")(passport);
const userRoute = require("./routes/user");
const ownerRoute = require("./routes/owner");
const propertyRoute = require("./routes/property");
const filterRoute = require("./routes/filterRoute");
// console.log(middlewares);

//middlewares
app.use(middlewares);
app.use(
  expressSession({
    secret:"secret",
    resave:false,
    saveUninitialized: false,
  })
  );
app.use(passport.initialize());
app.use(passport.session());
 app.use(flash);

  

// app.use("./uploads", express.static("__dirname + '/uploads"));
app.use("/api", (req, res, next) => {
  res.status(200).json({
    message: "Hello from Backend Server",
  });
  next();
});
app.use("/", userRoute);
app.use("/", ownerRoute);
app.use("/", propertyRoute);
app.use("/", filterRoute);
app.use("/", authRoutes);

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
module.exports = app;
