const express = require('express');
const mongoose = require('mongoose');
const flightApiLoggerSchema = require('../models/flight_api_logger');
const flightApiLoggerValidator = require('../validator/flight_api_logger');
const flightApiLogger = new mongoose.model(
  'flightApiLogger',
  flightApiLoggerSchema
);

exports.logs = async (req, res) => {
  try {
    const validateObj = {
      provider: req.body.provider,
      expiry: req.body.expiry,
    };

    /*  check the valid request body */
    const valid = await flightApiLoggerValidator.validateAsync(validateObj);

    const flightApiLoggerObject = new flightApiLogger(req.body);
    await flightApiLoggerObject.save();

    res.status(200).json({
      message: 'flightApiLogger was inserted successfully',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'There was a server side error!',
    });
  }
};
