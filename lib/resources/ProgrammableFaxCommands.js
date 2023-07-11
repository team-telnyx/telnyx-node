'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'faxes', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/faxes',
      urlParams: ['faxes'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/faxes',
      urlParams: ['faxes'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: 'faxes',
  includeBasic: ['del'],
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  send: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  cancel: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/cancel',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  refresh: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/refresh',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
