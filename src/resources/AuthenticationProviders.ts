import TelnyxResource from '../TelnyxResource.js';

export const AuthenticationProviders = TelnyxResource.extend({
  path: 'authentication_providers',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],
});
