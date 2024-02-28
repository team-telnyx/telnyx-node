'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'call_information',
  includeBasic: ['list','retrieve'],

  ListConnectionActiveCalls: telnyxMethod({
    method: 'GET',
    path: '/connections/{connection/id}/active_calls',
  }),

});
