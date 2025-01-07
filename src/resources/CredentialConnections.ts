import TelnyxResource from '../TelnyxResource.js';

export const CredentialConnections = TelnyxResource.extend({
  path: 'credential_connections',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
