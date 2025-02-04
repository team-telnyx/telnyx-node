import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const NumberBackgroundJobs = TelnyxResource.extend({
  path: 'phone_numbers/jobs',
  includeBasic: ['list', 'retrieve'],

  updateEmergencySettings: telnyxMethod({
    method: 'POST',
    path: '/update_emergency_settings',
  }),

  updateNumbers: telnyxMethod({
    method: 'POST',
    path: '/update_phone_numbers',
  }),

  deleteNumbers: telnyxMethod({
    method: 'POST',
    path: '/delete_phone_numbers',
  }),
});
