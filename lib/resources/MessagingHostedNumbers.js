var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'messagingHostedNumbers',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{messagingHostedNumberId}',
        urlParams: ['messagingHostedNumberId'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),
    }
  );
}

module.exports = require('../TelnyxResource').extend({
  path: 'verify_profiles',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],

    transformResponseData = transformResponseData
  }),
})
