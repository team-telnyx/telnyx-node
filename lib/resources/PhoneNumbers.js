'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = require('../TelnyxResource').extend({
  path: 'phone_numbers',
  includeBasic: ['list', 'update'],

  nestedResources: {
    Messaging: require('./PhoneNumbersMessaging')
  },

  listVoiceSettings: telnyxMethod({
    method: 'GET',
    path: '/{id}/voice',
    urlParams: ['id'],
    methodType: 'list',
  }),

  updateVoiceSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/voice',
    urlParams: ['id'],
  }),

  listMessagingSettings: telnyxMethod({
    method: 'GET',
    path: '/{id}/messaging',
    urlParams: ['id'],
  }),

  updateMessagingSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/messaging',
    urlParams: ['id'],
  }),
});
