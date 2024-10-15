import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const CustomerServiceRecords = TelnyxResource.extend({
  path: 'customer_service_records',
  includeBasic: ['list', 'create'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{customer_service_record_id}',
    urlParams: ['customer_service_record_id'],
  }),

  verifyPhoneNumbersCoverage: telnyxMethod({
    method: 'POST',
    path: '/phone_number_coverages',
  }),
});
