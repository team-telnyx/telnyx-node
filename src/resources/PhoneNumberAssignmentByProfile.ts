import TelnyxResource from '../TelnyxResource';
import * as utils from '../utils';
const telnyxMethod = TelnyxResource.method;

import {ResponsePayload, TelnyxObject} from '../Types';

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'phoneNumberAssignmentByProfile',
    {
      del: telnyxMethod({
        method: 'DELETE',
        path: '/{phoneNumberAssignmentByProfileId}',
        urlParams: ['phoneNumberAssignmentByProfileId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),

      update: telnyxMethod({
        method: 'PATCH',
        path: '/{phoneNumberAssignmentByProfileId}',
        urlParams: ['phoneNumberAssignmentByProfileId'],
        paramsValues: [response.data.id as string],
        paramsNames: ['id'],
      }),
    },
  );
}

export const PhoneNumberAssignmentByProfile = TelnyxResource.extend({
  path: 'phoneNumberAssignmentByProfile',

  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{taskId}',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),

  retrieveTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),

  phoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{taskId}/phoneNumbers',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),

  retrievePhoneNumberStatus: telnyxMethod({
    method: 'GET',
    path: '/{taskId}/phoneNumbers',
    urlParams: ['taskId'],

    transformResponseData: transformResponseData,
  }),
});
