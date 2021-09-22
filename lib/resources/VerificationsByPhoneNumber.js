'use strict';

var TelnyxResource = require('../TelnyxResource');

var submitVerificationMethod = TelnyxResource.method({
  method: 'POST',
  path: '/{phone_number}/actions/verify',
  urlParams: ['phone_number'],
});

module.exports = TelnyxResource.extend({
  path: 'verifications/by_phone_number',

  submit: submitVerificationMethod,
  create: submitVerificationMethod,
  verify: submitVerificationMethod,

  list: TelnyxResource.method({
    method: 'GET',
    path: '/{phone_number}',
    urlParams: ['phone_number'],
  }),
});
