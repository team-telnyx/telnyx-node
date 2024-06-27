'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, '/campaignBuilder', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/campaignBuilder',
      urlParams: ['campaignBuilder'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/campaignBuilder',
      urlParams: ['campaignBuilder'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: '/campaignBuilder',
  basePath: '/10dlc/',
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  retrieveQualifyByUsecase: telnyxMethod({
    method: 'GET',
    path: '/brand/{brandId}/usecase/{usecase}',
    urlParams: ['brandId', 'usecase'],
    transformResponseData: transformResponseData,
  }),
});
