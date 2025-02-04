import TelnyxResource from '../TelnyxResource.js';
import {ResponsePayload, TelnyxObject} from '../Types.js';
import * as utils from '../utils.js';

import {PhoneNumbersMessaging} from './PhoneNumbersMessaging.js';
import {PhoneNumbersVoice} from './PhoneNumbersVoice.js';
import {PhoneNumbersInboundChannels} from './PhoneNumbersInboundChannels.js';

const telnyxMethod = TelnyxResource.method;

function transformResponseData(
  response: ResponsePayload,
  telnyx: TelnyxObject,
) {
  return utils.addResourceToResponseData(response, telnyx, 'phoneNumbers', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{intId}',
      urlParams: ['intId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['intId'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/{intId}',
      urlParams: ['intId'],
      paramsValues: [response.data.id as string],
      paramsNames: ['intId'],
    }),
  });
}

export const PhoneNumbers = TelnyxResource.extend({
  path: 'phone_numbers',
  includeBasic: ['list', 'update', 'del'],

  nestedResources: {
    Messaging: PhoneNumbersMessaging,
    Voice: PhoneNumbersVoice,
    Inbound: PhoneNumbersInboundChannels,
  },

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  retrieveVoiceSettings: telnyxMethod({
    method: 'GET',
    path: '/{intId}/voice',
    urlParams: ['intId'],
    paramsNames: ['intId'],
    methodType: 'retrieve',
  }),

  updateVoiceSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{intId}/voice',
    urlParams: ['intId'],
    paramsNames: ['intId'],
  }),

  retrieveMessagingSettings: telnyxMethod({
    method: 'GET',
    path: '/{intId}/messaging',
    urlParams: ['intId'],
    paramsNames: ['intId'],
    methodType: 'retrieve',
  }),

  updateMessagingSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{intId}/messaging',
    urlParams: ['intId'],
    paramsNames: ['intId'],
  }),

  enableEmergencySettings: telnyxMethod({
    method: 'POST',
    path: '/{intId}/actions/enable_emergency',
    urlParams: ['intId'],
    paramsNames: ['intId'],
  }),

  retrieveVoicemail: telnyxMethod({
    method: 'GET',
    path: '/{phone_number_id}/voicemail',
    urlParams: ['phone_number_id'],
    paramsNames: ['phone_number_id'],
    methodType: 'retrieve',
  }),

  createVoicemail: telnyxMethod({
    method: 'POST',
    path: '/{phone_number_id}/voicemail',
    urlParams: ['phone_number_id'],
    paramsNames: ['phone_number_id'],
  }),

  updateVoicemail: telnyxMethod({
    method: 'PATCH',
    path: '/{phone_number_id}/voicemail',
    urlParams: ['phone_number_id'],
    paramsNames: ['phone_number_id'],
  }),
});
