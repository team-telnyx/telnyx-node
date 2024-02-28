'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'bulk_phone_number_operations',
  includeBasic: ['list','retrieve','create'],

  RetrievePhoneNumbersJob: telnyxMethod({
    method: 'GET',
    path: '/phone_numbers_jobs/{id}',
    urlParams: ['id'],
  }),
  CreateUpdatePhoneNumbersJob: telnyxMethod({
    method: 'POST',
    path: '/phone_numbers_jobs/update/phone_numbers',
  }),
  ListPhoneNumbersJobs: telnyxMethod({
    method: 'GET',
    path: '/phone_numbers_jobs',
  }),
  CreateDeletePhoneNumbersJob: telnyxMethod({
    method: 'POST',
    path: '/phone_numbers_jobs/delete/phone_numbers',
  }),
  CreatePhoneNumbersJobUpdateEmergencySettings: telnyxMethod({
    method: 'POST',
    path: '/phone_numbers_jobs/update/emergency_settings',
  }),

});
