const express = require('express');
const router = express.Router();

const indexProductiRoute = require('./product/ProductRoute');
router.use('/', indexProductiRoute);

module.exports = router;
