import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

const transformResponseData = (
  response: ResponsePayload,
  telnyx: TelnyxObject,
) => {
  return utils.addResourceToResponseData(response, telnyx, 'verifiedNumbers', {
    verify: telnyxMethod({
      method: 'POST',
      path: '/{verification_id}/actions/verify',
      urlParams: ['verification_id'],
      paramsNames: ['verification_id'],
      paramsValues: [response.data.id as string],
    }),
  });
};

export const Verifications = TelnyxResource.extend({
  path: 'verifications',

  callVerify: telnyxMethod({
    method: 'POST',
    path: '/call',
    methodType: 'create',
  }),

  flashcallVerify: telnyxMethod({
    method: 'POST',
    path: '/flashcall',
    methodType: 'create',
  }),

  smsVerify: telnyxMethod({
    method: 'POST',
    path: '/sms',
    methodType: 'create',
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{verification_id}',
    urlParams: ['verification_id'],

    transformResponseData: transformResponseData,
  }),

  verify: telnyxMethod({
    method: 'POST',
    path: '/{verification_id}/actions/verify',
    urlParams: ['verification_id'],
    paramsNames: ['verification_id'],
  }),

  listByPhoneNumber: telnyxMethod({
    method: 'GET',
    path: '/by_phone_number/{phone_number}',
    urlParams: ['phone_number'],
    paramsNames: ['phone_number'],
    methodType: 'list',
  }),

  verifyByPhoneNumber: telnyxMethod({
    method: 'POST',
    path: '/by_phone_number/{phone_number}/actions/verify',
    urlParams: ['phone_number'],
    paramsNames: ['phone_number'],
    methodType: 'create',
  }),
});
