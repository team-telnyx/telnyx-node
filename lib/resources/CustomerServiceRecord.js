'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'customer_service_record',
  includeBasic: ['list','retrieve','create'],

  ListCustomerServiceRecords: telnyxMethod({
    method: 'GET',
    path: '/customer_service_records',
  }),
  VerifyPhoneNumberCoverage: telnyxMethod({
    method: 'POST',
    path: '/customer_service_records/phone_number-coverages',
  }),
  GetCustomerServiceRecord: telnyxMethod({
    method: 'GET',
    path: '/customer_service_records/{customer_service_record_id}',
  }),

});
