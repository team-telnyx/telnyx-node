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
    'bulkTelephonyCredentials',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: 'actions/bulk/telephony_credentials',
        urlParams: ['bulkTelephonyCredentials'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: 'actions/bulk/telephony_credentials',
        urlParams: ['bulkTelephonyCredentials'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),
    },
  );
}

export const BulkTelephonyCredentials = TelnyxResource.extend({
  path: 'actions/bulk/telephony_credentials',
  updateCredentials: telnyxMethod({
    method: 'PATCH',
    transformResponseData: transformResponseData,
  }),
  deleteCredentials: telnyxMethod({
    method: 'DELETE',
    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
});
