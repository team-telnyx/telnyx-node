import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'ipConnections', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{ipConnectionId}',
      urlParams: ['ipConnectionId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{ipConnectionId}',
      urlParams: ['ipConnectionId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const IpConnections = TelnyxResource.extend({
  path: 'ip_connections',

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
