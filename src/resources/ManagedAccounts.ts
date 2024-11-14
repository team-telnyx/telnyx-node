import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'managedAccounts', {
    update: telnyxMethod({
      method: 'PATCH',
      path: '/managed_accounts/{id}',
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const ManagedAccounts = TelnyxResource.extend({
  path: '/managed_accounts',
  list: telnyxMethod({
    method: 'GET',
  }),
  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),
  retrieveManagedAccount: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  updateManagedAccount: telnyxMethod({
    method: 'PATCH',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  disableAccount: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/disable',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  enableAccount: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/enable',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
