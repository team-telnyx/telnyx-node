'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'rooms',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{roomId}',
        urlParams: ['roomId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = TelnyxResource.extend({
  path: 'rooms',
  basePath: '/v2-beta',

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
