import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const OtaUpdates = TelnyxResource.extend({
  path: 'ota_updates',
  includeBasic: ['list', 'retrieve'],

  GetOtaUpdate: telnyxMethod({
    method: 'GET',
    path: '/ota_updates/{id}',
  }),
  ListOtaUpdates: telnyxMethod({
    method: 'GET',
    path: '/ota_updates',
  }),
});
