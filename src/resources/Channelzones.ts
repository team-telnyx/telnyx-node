import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const Channelzones = TelnyxResource.extend({
  path: 'channel_zones',
  includeBasic: ['list'],

  update: telnyxMethod({
    method: 'PATCH',
    path: '/{channel_zone_id}',
    urlParams: ['channel_zone_id'],
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{channel_zone_id}',
    urlParams: ['channel_zone_id'],
  }),

  createPhoneNumber: telnyxMethod({
    method: 'POST',
    path: '/{channel_zone_id}/channel_zone_phone_numbers',
    urlParams: ['channel_zone_id'],
  }),

  listPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{channel_zone_id}/channel_zone_phone_numbers',
  }),

  delPhoneNumber: telnyxMethod({
    method: 'DELETE',
    path: '/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}',
    urlParams: ['channel_zone_id', 'phone_number'],
  }),
});
