import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'shortCodes', {
    update: telnyxMethod({
      method: 'PATCH',
      path: '/{shortCodeId}',
      urlParams: ['shortCodeId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const ShortCodes = TelnyxResource.extend({
  path: 'short_codes',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
