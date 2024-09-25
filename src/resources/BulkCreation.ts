import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'bulkCreation', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/bulkCreation',
      urlParams: ['bulkCreation'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/bulkCreation',
      urlParams: ['bulkCreation'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const BulkCreation = TelnyxResource.extend({
  path: 'bulkCreation',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),

  retrieveTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),
  retrieveDetailedTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}/detailedStatus',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),
});
