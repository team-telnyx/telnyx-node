import TelnyxResource from '../TelnyxResource.js';

const telnyxMethod = TelnyxResource.method;

export const PhoneNumbersInboundChannels = TelnyxResource.extend({
  path: 'phone_numbers/inbound_channels',
  includeBasic: ['list'],

  update: telnyxMethod({
    method: 'PATCH',
    methodType: 'update',
  }),
});
