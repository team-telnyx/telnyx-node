'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'verifyProfiles',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{verify_profile_id}',
        urlParams: ['verify_profile_id'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{verify_profile_id}',
        urlParams: ['verify_profile_id'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = require('../TelnyxResource').extend({
  path: 'verify_profiles',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],

    transformResponseData: transformResponseData,
  }),
});
