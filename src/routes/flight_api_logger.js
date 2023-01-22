const express = require('express');
const router = express.Router();
const apiRoutes=require('../controller/flight_api_logger');


router.post('/flight-api-logger',apiRoutes.logs);

router.get('/api', async (req, res) => {
    res.status(200).json({
      message: 'flightApiLogger was inserted successfully',
    });
  });

module.exports = router;
