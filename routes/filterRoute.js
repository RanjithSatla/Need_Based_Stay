const express = require('express');

const {
  genderFilter,
  preferedForFilter,
  roomTypeFilter,
} = require('../controllers/filter');

const router = express.Router();

router.get('/genderTest', genderFilter);
router.get('/preferedTest', preferedForFilter);
router.get('/roomTypeTest', roomTypeFilter);

module.exports = router;