import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';

const telnyxMethod = TelnyxResource.method;

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'numberOrders', {
    update: telnyxMethod({
      method: 'PATCH',
      path: '/{number_order_id}',
      urlParams: ['number_order_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['number_order_id'],
    }),
  });
}

export const NumberOrders = TelnyxResource.extend({
  path: 'number_orders',
  includeBasic: ['list', 'update'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{number_order_id}',
    urlParams: ['number_order_id'],

    transformResponseData: transformResponseData,
  }),
});
