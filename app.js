const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const db = require("./config/db");

const port = process.env.PORT || 3000;


//routes
const userRoute = require("./routes/user");
const ownerRoute = require("./routes/owner");


app.use(middlewares);
app.use("/", userRoute);
app.use("/", ownerRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
