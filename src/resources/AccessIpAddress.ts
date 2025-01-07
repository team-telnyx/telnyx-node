import TelnyxResource from '../TelnyxResource.js';

export const AccessIpAddress = TelnyxResource.extend({
  path: 'access_ip_address',
  includeBasic: ['list', 'create', 'retrieve', 'del'],
});
