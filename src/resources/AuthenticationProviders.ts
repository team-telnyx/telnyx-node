import TelnyxResource from '../TelnyxResource';

export const AuthenticationProviders = TelnyxResource.extend({
  path: 'authentication_providers',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],
});
