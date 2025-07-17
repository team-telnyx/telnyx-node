import TelnyxResource from '../TelnyxResource.js';

const telnyxMethod = TelnyxResource.method;

export const InboundChannels = TelnyxResource.extend({
  path: 'inbound_channels',
  includeBasic: ['list'],

  update: telnyxMethod({
    method: 'PATCH',
    methodType: 'update',
  }),
});
