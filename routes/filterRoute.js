const express = require("express");
//controllers
const filter = require("../controllers/filter");

const router = express.Router();

router.get("/filter", filter.filterAll);
router.get("/locationFilter", filter.locationFilter);

module.exports = router;
