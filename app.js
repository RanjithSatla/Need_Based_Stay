const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const db = require("./config/db");

const port = process.env.PORT || 3000;

const userRoute = require("./routes/user");
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
