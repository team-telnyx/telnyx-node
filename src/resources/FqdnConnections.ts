import TelnyxResource from '../TelnyxResource.js';
import * as utils from '../utils.js';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types.js';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'fqdnConnections', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{fqdnConnectionId}',
      urlParams: ['fqdnConnectionId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{fqdnConnectionId}',
      urlParams: ['fqdnConnectionId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const FqdnConnections = TelnyxResource.extend({
  path: 'fqdn_connections',

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
});
