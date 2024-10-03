import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

const CONFERENCES = [
  'join',
  'mute',
  'unmute',
  'hold',
  'unhold',
  'speak',
  'play',
  'stop',
  'record_start',
  'record_stop',
  'update',
  'leave',
  'record_resume',
  'record_pause',
];

function getSpec(conferenceId?: string) {
  return function (methodName: string) {
    return {
      method: 'POST',
      path: `/{conferenceId}/actions/${methodName}`,
      urlParams: ['conferenceId'],
      paramsValues: [conferenceId as string],
      paramsNames: ['id'],
      methodType: 'create',
    };
  };
}

export const Conferences = TelnyxResource.extend({
  path: 'conferences',
  includeBasic: ['list'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: function (response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'conferences',
        utils.createNestedMethods(
          telnyxMethod,
          CONFERENCES,
          getSpec(response.data.id as string),
        ),
      );
    },
  }),

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: function (response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'conferences',
        utils.createNestedMethods(
          telnyxMethod,
          CONFERENCES,
          getSpec(response.data.id as string),
        ),
      );
    },
  }),

  participants: telnyxMethod({
    method: 'GET',
    path: '/{conferenceId}/participants',
    urlParams: ['conferenceId'],
  }),

  instanceMethods: utils.createNestedMethods(
    telnyxMethod,
    CONFERENCES,
    getSpec(),
  ),
});
