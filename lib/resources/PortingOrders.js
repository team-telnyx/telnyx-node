'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'portingOrders',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{portingOrderId}',
        urlParams: ['portingOrderId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{portingOrderId}',
        urlParams: ['portingOrderId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = TelnyxResource.extend({
  path: 'porting_orders',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',
    methodType: 'create',

    transformResponseData: transformResponseData,
  }),

  // include_phone_numbers query param
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  retrieveLoaTemplate: telnyxMethod({
    method: 'GET',
    path: '/{id}/loa_template',
    urlParams: ['id'],
  }),

  confirmOrder: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/confirm',
    urlParams: ['id'],
  }),
});
