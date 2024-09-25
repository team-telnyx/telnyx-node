import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const BusinessIdentity = TelnyxResource.extend({
  path: 'business_identity',
  includeBasic: ['list', 'retrieve', 'delete'],

  ListBusinessIdentities: telnyxMethod({
    method: 'GET',
    path: '/business/identities',
  }),
  DeleteBusinessIdentity: telnyxMethod({
    method: 'DELETE',
    path: '/business/identities/{id}',
    urlParams: ['id'],
  }),
});
