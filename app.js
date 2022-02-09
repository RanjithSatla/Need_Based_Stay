const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const db = require("./config/db");

// const port = process.env.PORT || 3000;

//routes
const userRoute = require("./routes/user");
const ownerRoute = require("./routes/owner");
const propertyRoute = require("./routes/property");
const filterRoute = require("./routes/filterRoute");

app.use(middlewares);
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

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
