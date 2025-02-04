import TelnyxResource from '../TelnyxResource.js';
import * as utils from '../utils.js';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types.js';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'addresses', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{addressId}',
      urlParams: ['addressId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const Addresses = TelnyxResource.extend({
  path: 'addresses',
  includeBasic: ['del'],

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),

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

  validate: telnyxMethod({
    method: 'POST',
    path: '/actions/validate',
  }),
});
