'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'actions', {});
}

module.exports = TelnyxResource.extend({
  path: 'actions',

  create: telnyxMethod({
    method: 'POST',
    path: '/{action}/telephony_credentials',
    urlParams: ['action'],
    transformResponseData: transformResponseData,
  }),
});
