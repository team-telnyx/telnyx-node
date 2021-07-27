'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'telephonyCredentials',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{telephony_credential_id}',
        urlParams: ['telephony_credential_id'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

var telephonyCredentialResource = {
  path: 'telephony_credentials',

  includeBasic: ['del', 'list', 'update'],

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

  retrieveCredential: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

};

telephonyCredentialResource.generateAccessTokenFromCredential = telephonyCredentialResource.retrieve;

module.exports = TelnyxResource.extend(telephonyCredentialResource);
