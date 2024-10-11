import TelnyxResource from '../TelnyxResource';

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
