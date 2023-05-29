'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'bulkCreation', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/bulkCreation',
      urlParams: ['bulkCreation'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/bulkCreation',
      urlParams: ['bulkCreation'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: 'bulkCreation',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
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
  retrieveDetailedTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}/detailedStatus',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),
});
