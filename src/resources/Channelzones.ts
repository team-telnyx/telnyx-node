import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const Channelzones = TelnyxResource.extend({
  path: 'channel_zones',
  includeBasic: ['list'],

  update: telnyxMethod({
    method: 'PUT',
    path: '/{channel_zone_id}',
    urlParams: ['channel_zone_id'],
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{channel_zone_id}',
    urlParams: ['channel_zone_id'],
  }),
});
