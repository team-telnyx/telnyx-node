'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'verified_calls_display_profiles',

  create: TelnyxResource.method({
    method: 'POST',
    path: '/{id}/verification_request',
    urlParams: ['id'],
  }),
});
