import TelnyxResource from '../TelnyxResource';

export const CredentialConnections = TelnyxResource.extend({
  path: 'credential_connections',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
