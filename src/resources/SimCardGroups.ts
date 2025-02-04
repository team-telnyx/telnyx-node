import TelnyxResource from '../TelnyxResource.js';
import * as utils from '../utils.js';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types.js';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'simCardGroups', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{simCardGroupId}',
      urlParams: ['simCardGroupId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{simCardGroupId}',
      urlParams: ['simCardGroupId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const SimCardGroups = TelnyxResource.extend({
  path: 'sim_card_groups',

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
