'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

var CALL_COMMANDS = [
  'answer',
  'reject',
  'hangup',
  'bridge',
  'speak',
  'fork_start',
  'fork_stop',
  'gather',
  'gather_using_audio',
  'gather_using_speak',
  'gather_stop',
  'playback_start',
  'playback_stop',
  'record_start',
  'record_stop',
  'record_pause',
  'record_resume',
  'refer',
  'send_dtmf',
  'streaming_start',
  'streaming_stop',
  'suppression_start',
  'suppression_stop',
  'transfer',
  'transcription_start',
  'transcription_stop',
  'enqueue',
  'leave_queue'
];

function getSpec(callControlId) {
  return function(methodName) {
    return {
      method: 'POST',
      path: `/{call_control_id}/actions/${methodName}`,
      urlParams: ['call_control_id'],
      paramsValues: [callControlId],
      paramsNames: ['call_control_id'],
      methodType: 'create',
    }
  }
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
        utils.createNestedMethods(
          telnyxMethod,
          CALL_COMMANDS,
          getSpec(response.data.call_control_id)
        )
      );
    },
  }),

  instanceMethods: utils.createNestedMethods(telnyxMethod, CALL_COMMANDS, getSpec())
});
