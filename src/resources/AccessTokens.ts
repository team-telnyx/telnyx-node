import TelnyxResource from '../TelnyxResource';

export const AccessTokens = TelnyxResource.extend({
  path: 'access_ip_ranges',
  includeBasic: ['create'],
});
