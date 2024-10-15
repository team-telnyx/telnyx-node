import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'outboundVoiceProfiles',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{outboundId}',
        urlParams: ['outboundId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{outboundId}',
        urlParams: ['outboundId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),
    },
  );
}

export const OutboundVoiceProfiles = TelnyxResource.extend({
  path: 'outbound_voice_profiles',
  includeBasic: ['list', 'update', 'del'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
