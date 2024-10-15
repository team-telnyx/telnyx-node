import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Regions = TelnyxResource.extend({
  path: 'regions',
  includeBasic: ['list', 'retrieve'],

  ListRegions: telnyxMethod({
    method: 'GET',
    path: '/regions',
  }),
});
