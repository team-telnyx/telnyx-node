'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'verifications',

  nestedResources: {
    ByPhoneNumber: require('./VerificationsByPhoneNumber'),
    SMS: require('./VerificationsSMS'),
    Call: require('./VerificationsCall'),
    FlashCall: require('./VerificationsFlashCall'),
    PSD2: require('./VerificationsPSD2'),
    WhatsApp: require('./VerificationsWhatsApp')
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
