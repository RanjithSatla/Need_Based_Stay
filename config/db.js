const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// mongoose.Promise = global.Promise;


const db  = require("../models");
const Role = db.role;

// const DB_PASS = process.env.db_pass;

const CONNECTION_URL = process.env.mongo_url;
//Connect to DB:
db.mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("Connected to database");
  initial();

})
.catch(err =>{
  console.log("Connecting error", err);
  process.exit();
});
// //Handle:
// const con = mongoose.connection;

// con.on("open", () => {
//   console.log("Connected");
//   // console.log(CONNECTION_URL);
// });
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "owner"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'owner' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
};


module.exports = mongoose;
