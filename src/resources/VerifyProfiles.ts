import TelnyxResource from '../TelnyxResource.js';

const telnyxMethod = TelnyxResource.method;

export const VerifyProfiles = TelnyxResource.extend({
  path: 'verify_profiles',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],

  listTemplates: telnyxMethod({
    method: 'GET',
    path: '/templates',
    methodType: 'list',
  }),
});
