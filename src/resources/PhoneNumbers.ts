import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

import {PhoneNumbersMessaging} from './PhoneNumbersMessaging';
import {PhoneNumbersVoice} from './PhoneNumbersVoice';
import {PhoneNumbersInboundChannels} from './PhoneNumbersInboundChannels';

export const PhoneNumbers = TelnyxResource.extend({
  path: 'phone_numbers',
  includeBasic: ['list', 'retrieve', 'update', 'del'],

  nestedResources: {
    Messaging: PhoneNumbersMessaging,
    Voice: PhoneNumbersVoice,
    Inbound: PhoneNumbersInboundChannels,
  },

  retrieveVoiceSettings: telnyxMethod({
    method: 'GET',
    path: '/{id}/voice',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),

  updateVoiceSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/voice',
    urlParams: ['id'],
  }),

  retrieveMessagingSettings: telnyxMethod({
    method: 'GET',
    path: '/{id}/messaging',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),

  updateMessagingSettings: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/messaging',
    urlParams: ['id'],
  }),

  setEmergencySettings: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/enable_emergency',
    urlParams: ['id'],
  }),
});
