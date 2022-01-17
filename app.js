const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')


dotenv.config();
 mongoose.connect(process.env.MONGO_URL, ()=>{
     console.log('connected to Mongoose server');
});

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log(`listening on port ${port}`);
});