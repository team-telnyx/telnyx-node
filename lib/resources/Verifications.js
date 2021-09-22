'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'verifications',

  nestedResources: {
    ByPhoneNumber: require('./VerificationsByPhoneNumber'),
    BySMS: require('./VerificationsBySMS'),
    Sms: require('./VerificationsSMS'),
    Call: require('./VerificationsCall'),
    Flashcall: require('./VerificationsFlashCall'),
    Psd2: require('./VerificationsPSD2'),
    Whatsapp: require('./VerificationsWhatsApp')
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
