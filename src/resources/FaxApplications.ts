import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'faxApplications', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{faxApplicationId}',
      urlParams: ['faxApplicationId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{faxApplicationId}',
      urlParams: ['faxApplicationId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const FaxApplications = TelnyxResource.extend({
  path: 'fax_applications',

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
