const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const db = require("./config/db");

// const port = process.env.PORT || 3000;

//routes
const userRoute = require("./routes/user");
const ownerRoute = require("./routes/owner");
const propertyRoute = require("./routes/property")

app.use(middlewares);
app.use("/api", (req, res) => {
  res.send("hello from backend server");
});
app.use("/", userRoute);
app.use("/", ownerRoute);
app.use("/", propertyRoute);

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
