'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'debugging',
  includeBasic: ['list','retrieve'],

  ListCallEvents: telnyxMethod({
    method: 'GET',
    path: '/call_events',
  }),

});
