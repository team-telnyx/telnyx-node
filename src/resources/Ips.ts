import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'ips', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{ipId}',
      urlParams: ['ipId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['ipId'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{ipId}',
      urlParams: ['ipId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['ipId'],
    }),
  });
}

export const Ips = TelnyxResource.extend({
  path: 'ips',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
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
});
