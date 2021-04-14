'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'access_tokens',
    {
      refresh: telnyxMethod({
        method: 'POST',
        path: '/actions/refresh',
        urlParams: [],
        paramsValues: [response.data.refresh_token],
        paramsNames: ['refresh_token'],
      }),
    }
  );
}

module.exports = require('../TelnyxResource').extend({
  path: 'access_tokens',
  basePath: '/v2-beta',

  create: telnyxMethod({
    method: 'POST',
  }),
});
