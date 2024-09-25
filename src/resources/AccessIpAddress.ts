import TelnyxResource from '../TelnyxResource';

export const AccessIpAddress = TelnyxResource.extend({
  path: 'access_ip_address',
  includeBasic: ['list', 'create', 'retrieve', 'del'],
});
