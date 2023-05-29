'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'phoneNumberAssignmentByProfile',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{phoneNumberAssignmentByProfileId}',
        urlParams: ['phoneNumberAssignmentByProfileId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{phoneNumberAssignmentByProfileId}',
        urlParams: ['phoneNumberAssignmentByProfileId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = TelnyxResource.extend({
  path: 'phoneNumberAssignmentByProfile',

  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),

  retrieveTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),

  retrievePhoneNumberStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}/phoneNumbers',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),
});
