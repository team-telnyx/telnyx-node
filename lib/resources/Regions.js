'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'regions',
  includeBasic: ['list','retrieve'],

  ListRegions: telnyxMethod({
    method: 'GET',
    path: '/regions',
  }),

});
