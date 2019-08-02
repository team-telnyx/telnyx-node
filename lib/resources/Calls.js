'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function nestedMethods(callControlId) {
  var commands = {};

  [
    'answer',
    'reject',
    'hangup',
    'bridge',
    'speak',
    'fork_start',
    'fork_stop',
    'gather_using_audio',
    'gather_using_speak',
    'playback_start',
    'playback_stop',
    'record_start',
    'record_stop',
    'send_dtmf',
    'transfer'
  ].forEach(function(name) {
    commands[name] = telnyxMethod({
      method: 'POST',
      path: `/{callControlId}/actions/${name}`,
      urlParams: ['callControlId'],
      urlParamsValues: [callControlId],
      methodType: 'create',
    })
  });

  return commands;
}

module.exports = require('../TelnyxResource').extend({
  path: 'calls',
  includeBasic: ['retrieve'], // status method

  create: telnyxMethod({ // dial method
    method: 'POST',

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'calls',
        nestedMethods(response.data.call_control_id)
      );
    },
  }),
});
