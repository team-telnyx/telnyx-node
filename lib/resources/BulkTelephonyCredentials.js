'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'bulkTelephonyCredentials',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: 'actions/bulk/telephony_credentials',
        urlParams: ['bulkTelephonyCredentials'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: 'actions/bulk/telephony_credentials',
        urlParams: ['bulkTelephonyCredentials'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = TelnyxResource.extend({
  path: 'actions/bulk/telephony_credentials',
  updateCredentials: telnyxMethod({
    method: 'PATCH',
    transformResponseData: transformResponseData,
  }),
  deleteCredentials: telnyxMethod({
    method: 'DELETE',
    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
});
