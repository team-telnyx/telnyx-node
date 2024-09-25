import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const InboundChannels = TelnyxResource.extend({
  path: 'inbound_channels',
  includeBasic: ['list', 'retrieve'],

  ListInboundChannels: telnyxMethod({
    method: 'GET',
    path: '/phone_numbers/inbound_channels',
  }),
});
