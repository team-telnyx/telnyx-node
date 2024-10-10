import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'verifyProfiles', {
    retrieveVerifyProfileMessageTemplates: telnyxMethod({
      method: 'GET',
      path: '/verify_profiles/templates',
    }),
  });
}

export const VerifyProfiles = TelnyxResource.extend({
  path: 'verify_profiles',
  includeBasic: ['list', 'update', 'del'],

  save: telnyxMethod({
    method: 'PATCH',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],
    paramsNames: ['id'],

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{verify_profile_id}',
    urlParams: ['verify_profile_id'],
    paramsNames: ['id'],

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),
});
