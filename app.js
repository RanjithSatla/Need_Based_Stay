const express = require("express");
const app = express();
const db = require("./config/db");

const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
