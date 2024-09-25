import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Channelzones = TelnyxResource.extend({
  path: 'channelzones',
  includeBasic: ['list', 'retrieve', 'delete'],

  GetChannelZone: telnyxMethod({
    method: 'GET',
    path: '/channel_zones/{channel/zone/id}',
  }),
  UnassignPhoneNumber: telnyxMethod({
    method: 'DELETE',
    path: '/channel_zones/{channel/zone/id}/channel_zone_phone_numbers/{phone_number}',
  }),
  GetChannelZones: telnyxMethod({
    method: 'GET',
    path: '/channel/zones',
  }),
  GetPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers',
  }),
});
