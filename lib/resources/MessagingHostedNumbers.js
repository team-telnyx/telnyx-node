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
  path: 'messaging_hosted_numbers',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{messaging_hosted_number_id}',
    urlParams: ['messaging_hosted_number_id'],

    transformResponseData = transformResponseData
  }),
})
