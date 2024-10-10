import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

const CONFERENCES_COMMANDS = [
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
  if (conferenceId) {
    return function (methodName: string) {
      return {
        method: 'POST',
        path: `/{conferenceId}/actions/${methodName}`,
        urlParams: ['conferenceId'],
        paramsValues: [conferenceId],
        paramsNames: ['conferenceId'],
        methodType: 'create',
      };
    };
  }

  return function (methodName: string) {
    return {
      method: 'POST',
      path: `/{conferenceId}/actions/${methodName}`,
      urlParams: ['conferenceId'],
      paramsNames: ['conferenceId'],
      methodType: 'create',
    };
  };
}

const transformResponseData = (
  response: ResponsePayload,
  telnyx: TelnyxObject,
) => {
  const methods = utils.createNestedMethods(
    telnyxMethod,
    CONFERENCES_COMMANDS,
    getSpec(response.data.id as string),
  );

  methods.listParticipants = telnyxMethod({
    method: 'GET',
    path: '/{conferenceId}/participants',
    urlParams: ['conferenceId'],
  });

  return utils.addResourceToResponseData(
    response,
    telnyx,
    'conferences',
    methods,
  );
};

export const Conferences = TelnyxResource.extend({
  path: 'conferences',
  includeBasic: ['list'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),

  listParticipants: telnyxMethod({
    method: 'GET',
    path: '/{conferenceId}/participants',
    urlParams: ['conferenceId'],
  }),

  instanceMethods: utils.createNestedMethods(
    telnyxMethod,
    CONFERENCES_COMMANDS,
    getSpec(),
  ),
});
