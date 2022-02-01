const express = require("express");
//controllers
const filter = require("../controllers/filter");

const router = express.Router();

router.get("/gender", filter.genderFilter);
router.get("/locationFilter", filter.locationFilter);
router.get("/roomTypeTest", filter.roomTypeFilter);

module.exports = router;
