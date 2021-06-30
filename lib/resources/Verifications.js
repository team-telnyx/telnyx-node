'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'verifications',

  nestedResources: {
    ByPhoneNumber: require('./VerificationsByPhoneNumber'),
    SMS: require('./sms'),
    PSD2: require('./psd2'),
    Call: require('./call'),
    FlashCall: require('./flashcall'),
    WhatsApp: require('./whatsapp')
  },

  create: TelnyxResource.method({
    method: 'POST',
  }),

  retrieve: TelnyxResource.method({
    method: 'GET',
    path: '/{verification_id}',
    urlParams: ['verification_id'],
  }),
});
