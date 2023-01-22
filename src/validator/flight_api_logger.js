const Joi = require('joi');

module.exports = Joi.object({
  provider: Joi.string().valid(
    'USBA',
    'USBA_ST',
    'SABRE',
    'SABRE_ST',
    'P3284268',
    'P7183383',
    'P3953799',
    'TRAVEL_FUSION',
    'AIR_ARABIA',
    'AIRARABIA_ABUDHABI',
    'NOVO',
    'AMADEUS',
    'AIR_ASTRA',
    'SINGAPUR'
  ),

  expiry: Joi.string()
    .allow(null, '')
    .valid('TEMPORARY', 'PERSISTENT')
    .default('TEMPORARY'),
});
