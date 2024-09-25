import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const IpAddresses = TelnyxResource.extend({
  path: 'ip_addresses',
  includeBasic: ['list', 'retrieve', 'delete'],

  ListAccessIpAddresses: telnyxMethod({
    method: 'GET',
    path: '/access_ip_address',
  }),
  DeleteAccessIpAddress: telnyxMethod({
    method: 'DELETE',
    path: '/access_ip_address_{access_ip_address_id}',
    urlParams: ['access_ip_address_id'],
  }),
});
