import TelnyxResource from '../TelnyxResource.js';
import * as utils from '../utils.js';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types.js';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'simCards', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{sim_card_id}',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    save: telnyxMethod({
      method: 'PATCH',
      path: '/{sim_card_id}',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    activate: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/enable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    deactivate: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/disable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    enable: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/enable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    disable: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/disable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    setStandby: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/set_standby',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    retrievePublicIP: telnyxMethod({
      method: 'GET',
      path: '/{sim_card_id}/public_ip',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const SimCards = TelnyxResource.extend({
  path: 'sim_cards',
  includeBasic: ['update'],

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
