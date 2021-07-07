'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'verifications',

  nestedResources: {
    ByPhoneNumber: require('./VerificationsByPhoneNumber'),
    SMS: require('./VerificationsSMS')
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
