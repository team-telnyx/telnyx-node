'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'managedAccounts', {
    update: telnyxMethod({
      method: 'PATCH',
      path: '/managed_accounts/{id}',
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: '/managed_accounts',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),
  retrieveManagedAccount: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  updateManagedAccount: telnyxMethod({
    method: 'PATCH',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  disableAccount: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/disable',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  enableAccount: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/enable',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
