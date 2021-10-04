'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = require('../TelnyxResource').extend({
  path: 'phone_numbers/jobs',
  includeBasic: ['list', 'retrieve'],

  updateEmergencySettings: telnyxMethod({
    method: 'POST',
    path: '/update_emergency_settings'
  }),

  updateNumbers: telnyxMethod({
    method: 'POST',
    path: '/update_phone_numbers'
  }),

  deleteNumbers: telnyxMethod({
    method: 'POST',
    path: '/delete_phone_numbers'
  }),
});
