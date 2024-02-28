'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'billing',
  includeBasic: ['list','retrieve'],

  GetUserBalance: telnyxMethod({
    method: 'GET',
    path: '/balance',
  }),

});
