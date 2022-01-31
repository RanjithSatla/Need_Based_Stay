// const express = require('express');

// const {
//   genderFilter,
//   preferedForFilter,
//   roomTypeFilter,
// } = require('../controllers/filter');

// const router = express.Router();

// router.get('/genderTest', genderFilter);
// router.get('/preferedTest', preferedForFilter);
// router.get('/roomTypeTest', roomTypeFilter);

// module.exports = router;

const express = require("express");
//controllers
const filter = require("../controllers/filter");

const router = express.Router();
// const Owner = require("../models/ownerModel");

router.get("/genderTest", filter.genderFilter);
router.get("/preferedTest", filter.preferedForFilter);
router.get("/roomTypeTest", filter.roomTypeFilter);

module.exports = router;
