const express = require('express');
const mongoose = require('mongoose');
const connectWithDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost/fpa-logger', {
      useNewUrlParser: true,
    });
    console.log('Database connected successful');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectWithDb;
