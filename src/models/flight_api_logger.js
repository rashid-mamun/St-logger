const { string } = require('joi');
const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  provider: {
    type: String,
    enum: [
      'USBA','USBA_ST','SABRE','SABRE_ST','P3284268','P7183383','P3953799','TRAVEL_FUSION','AIR_ARABIA','AIRARABIA_ABUDHABI','NOVO','AMADEUS','AIR_ASTRA','SINGAPUR',
    ],
  },
  searchId: {
    type: String,
  },
  ref: {
    type: String,
  },
  message: {
    type: String,
  },
  executionTime: {
    type: String,
  },
  request: {
    type: String,
  },
  response: {
    type: String,
  },
  type: {
    type: String,
  },

  expiry: {
    type: String,
    enum: ['TEMPORARY', 'PERSISTENT'],
    default:'TEMPORARY'
  },
});
