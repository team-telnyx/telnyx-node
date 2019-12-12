'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'ipConnections',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{ipConnectionId}',
        urlParams: ['ipConnectionId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{ipConnectionId}',
        urlParams: ['ipConnectionId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = TelnyxResource.extend({
  path: 'ip_connections',

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
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
