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
    'telephonyCredentials',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{telephony_credential_id}',
        urlParams: ['telephony_credential_id'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),
    },
  );
}

export const TelephonyCredentials = TelnyxResource.extend({
  path: 'telephony_credentials',

  includeBasic: ['del', 'list', 'update'],

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

  createToken: telnyxMethod({
    method: 'POST',
    path: '/{id}/token',
    urlParams: ['id'],
  }),
});
