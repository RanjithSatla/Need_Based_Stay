const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const DB_PASS = process.env.db_pass;

const CONNECTION_URL = process.env.mongo_url;
//Connect to DB:
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

//Handle:
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected");
  // console.log(CONNECTION_URL);
});

module.exports = mongoose;
