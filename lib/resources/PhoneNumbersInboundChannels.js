'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'phoneNumbersInboundChannels',
    {
      update: telnyxMethod({
        method: 'PATCH',
        path: '',
        urlParams: ['channels'],
        paramsValues: [response.data.id],
        paramsNames: ['channels'],
      }),
    }
  );
}

module.exports = require('../TelnyxResource').extend({
  path: 'phone_numbers/inbound_channels',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '',
    urlParams: [],

    transformResponseData: transformResponseData,
  }),
});
