'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = require('../TelnyxResource').extend({
  path: 'phone_numbers',
  includeBasic: ['list', 'retrieve', 'update', 'del'],

  nestedResources: {
    Messaging: require('./PhoneNumbersMessaging'),
    Voice: require('./PhoneNumbersVoice'),
    Inbound: require('./PhoneNumbersInboundChannels'),
  },

  retrieveVoiceSettings: telnyxMethod({
    method: 'GET',
    path: '/{id}/voice',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),

  updateVoiceSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/voice',
    urlParams: ['id'],
  }),

  retrieveMessagingSettings: telnyxMethod({
    method: 'GET',
    path: '/{id}/messaging',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),

  updateMessagingSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/messaging',
    urlParams: ['id'],
  }),
});
