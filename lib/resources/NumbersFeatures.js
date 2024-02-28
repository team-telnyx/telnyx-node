'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'numbers_features',
  includeBasic: ['create'],

  PostNumbersFeatures: telnyxMethod({
    method: 'POST',
    path: '/numbers_features',
  }),

});
