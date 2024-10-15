import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

const CALL_COMMANDS = [
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
  'leave_queue',
];

function getSpec(callControlId?: string) {
  if (callControlId) {
    return function (methodName: string) {
      return {
        method: 'POST',
        path: `/{call_control_id}/actions/${methodName}`,
        urlParams: ['call_control_id'],
        paramsValues: [callControlId],
        paramsNames: ['call_control_id'],
        methodType: 'create',
      };
    };
  }

  return function (methodName: string) {
    return {
      method: 'POST',
      path: `/{call_control_id}/actions/${methodName}`,
      urlParams: ['call_control_id'],
      paramsNames: ['call_control_id'],
      methodType: 'create',
    };
  };
}

export const Calls = TelnyxResource.extend({
  path: 'calls',
  includeBasic: ['retrieve'], // status method

  dial: telnyxMethod({
    // dial method
    method: 'POST',

    transformResponseData: function (response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'calls',
        utils.createNestedMethods(
          telnyxMethod,
          CALL_COMMANDS,
          getSpec(response.data.call_control_id as string),
        ),
      );
    },
  }),

  create: telnyxMethod({
    // dial method
    method: 'POST',

    transformResponseData: function (response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'calls',
        utils.createNestedMethods(
          telnyxMethod,
          CALL_COMMANDS,
          getSpec(response.data.call_control_id as string),
        ),
      );
    },
  }),

  updateClientState: telnyxMethod({
    path: '/{call_control_id}/actions/client_state_update',
    urlParams: ['call_control_id'],
    method: 'PUT',
  }),

  instanceMethods: utils.createNestedMethods(
    telnyxMethod,
    CALL_COMMANDS,
    getSpec(),
  ),
});
