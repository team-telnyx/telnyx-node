import TelnyxResource from '../TelnyxResource.js';
import {ResponsePayload, TelnyxObject} from '../Types.js';
import * as utils from '../utils.js';

const telnyxMethod = TelnyxResource.method;

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'texmlApplications',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{texmlApplicationId}',
        urlParams: ['texmlApplicationId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['texmlApplicationId'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{texmlApplicationId}',
        urlParams: ['texmlApplicationId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['texmlApplicationId'],
      }),
    },
  );
}

export const TexmlApplications = TelnyxResource.extend({
  path: 'texml_applications',
  includeBasic: ['list', 'update', 'del'],

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
