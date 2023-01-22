const express = require('express');
const router = express.Router();
const flightApiLoggerRoute = require('./flight_api_logger');

router.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center">App Online, 2023!</h1>');
});

router.use('', flightApiLoggerRoute);

module.exports = router;
