const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const DB_PASS = process.env.db_pass;

const CONNECTION_URL =
  `mongodb+srv://ranjith:` +
  DB_PASS +
  `@capstone.pacon.mongodb.net/ms?retryWrites=true&w=majority`;

//Connect to DB:
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
});

//Handle:
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected");
});

module.exports = mongoose;
