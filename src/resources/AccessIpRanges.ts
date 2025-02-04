import TelnyxResource from '../TelnyxResource.js';

export const AccessIpRanges = TelnyxResource.extend({
  path: 'access_ip_ranges',
  includeBasic: ['list', 'create', 'retrieve', 'del'],
});
