'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'telephonyCredentials'
  );
}

module.exports = TelnyxResource.extend({
  path: 'telephony_credentials',

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'POST',
    path: '/{id}/token',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
