import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';

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
