const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const db = require("./config/db");

// const port = process.env.PORT || 3000;

//routes
 require("./routes/authRoutes")(app);
const userRoute = require("./routes/user");
const ownerRoute = require("./routes/owner");
const propertyRoute = require("./routes/property");
const filterRoute = require("./routes/filterRoute");
// console.log(middlewares);

app.use(middlewares);
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
// app.use("/",authRoute);

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
module.exports= app;