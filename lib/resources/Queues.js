'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'queues'
  );
}

module.exports = TelnyxResource.extend({
  path: 'queues',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  list_calls: telnyxMethod({
    method: 'GET',
    path: '/{id}/calls',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  retrieve_call: telnyxMethod({
    method: 'GET',
    path: '/{id}/calls/{callControlID}',
    urlParams: ['id','callControlID'],

    transformResponseData: transformResponseData,
  }),
});
