import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'verification', {
    sms: telnyxMethod({
      method: 'POST',
      path: '/sms',

      transformResponseData: transformResponseData,
    }),

    call: telnyxMethod({
      method: 'POST',
      path: '/call',

      transformResponseData: transformResponseData,
    }),

    flashcall: telnyxMethod({
      method: 'POST',
      path: '/flashcall',

      transformResponseData: transformResponseData,
    }),

    byPhoneNumber: telnyxMethod({
      method: 'GET',
      path: '/verifications/by_phone_number/{phone_number}',
      urlParams: ['phone_number'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    verifyVerificationCodeByPhoneNumber: telnyxMethod({
      method: 'POST',
      path: '/by_phone_number/{phone_number}/actions/verify',
      urlParams: ['phone_number'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),

    verifyVerificationCodeById: telnyxMethod({
      method: 'POST',
      path: '/by_phone_number/{verification_id}/actions/verify',
      urlParams: ['verification_id'],
      paramsValues: [response.data.id as string],
      paramsNames: ['id'],
    }),
  });
}

export const Verifications = TelnyxResource.extend({
  path: 'verifications',
  includeBasic: ['update'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{verification_id}',
    urlParams: ['verification_id'],

    transformResponseData: transformResponseData,
  }),
});
