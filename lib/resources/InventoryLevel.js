'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'inventory_level',
  includeBasic: ['list','retrieve'],

  CreateInventoryCoverage: telnyxMethod({
    method: 'GET',
    path: '/inventory_coverage',
  }),

});
