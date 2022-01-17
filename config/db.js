const express = require("express");
const mongoose = require("mongoose");

const CONNECTION_URL = `mongodb+srv://ranjith:ranjith@capstone.pacon.mongodb.net/ms?retryWrites=true&w=majority`;

//Connect to DB:
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });

//Handle:
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected");
});

module.exports = mongoose;
