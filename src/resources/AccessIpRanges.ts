import TelnyxResource from '../TelnyxResource';

export const AccessIpRanges = TelnyxResource.extend({
  path: 'access_ip_ranges',
  includeBasic: ['list', 'create', 'retrieve', 'del'],
});
