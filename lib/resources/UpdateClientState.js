'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'updateClientState',
    {}
  );
}
module.exports = TelnyxResource.extend({
  path: 'calls/{call_control_id}/actions/client_state_update',
  update: telnyxMethod({
    urlParams: ['call_control_id'],
    method: 'PUT',
    transformResponseData: transformResponseData,
  }),
});
