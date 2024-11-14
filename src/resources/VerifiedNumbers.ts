import TelnyxResource from '../TelnyxResource';
import {ResponsePayload, TelnyxObject} from '../Types';
import * as utils from '../utils';

const telnyxMethod = TelnyxResource.method;

const transformResponseData = (
  response: ResponsePayload,
  telnyx: TelnyxObject,
) => {
  return utils.addResourceToResponseData(response, telnyx, 'verifiedNumbers', {
    verify: telnyxMethod({
      method: 'POST',
      path: '/{phone_number}/actions/verify',
      urlParams: ['phone_number'],
      paramsNames: ['phone_number'],
      paramsValues: [response.data.id as string],
    }),
  });
};

export const VerifiedNumbers = TelnyxResource.extend({
  path: 'verified_numbers',
  includeBasic: ['list', 'del'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{phone_number}',
    urlParams: ['phone_number'],

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  request: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  verify: telnyxMethod({
    method: 'POST',
    path: '/{phone_number}/actions/verify',
    urlParams: ['phone_number'],
    paramsNames: ['phone_number'],
    methodType: 'create',
  }),
});
