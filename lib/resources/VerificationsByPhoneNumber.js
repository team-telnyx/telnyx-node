'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'verifications/by_phone_number',

  submit: TelnyxResource.method({
    method: 'POST',
    path: '/{phone_number}/actions/verify',
    urlParams: ['phone_number'],
  }),

  create: TelnyxResource.method({
    method: 'POST',
    path: '/{phone_number}/actions/verify',
    urlParams: ['phone_number'],
  }),

  verify: TelnyxResource.method({
    method: 'POST',
    path: '/{phone_number}/actions/verify',
    urlParams: ['phone_number'],
  }),

  list: TelnyxResource.method({
    method: 'GET',
    path: '/{phone_number}',
    urlParams: ['phone_number'],
  }),
});
