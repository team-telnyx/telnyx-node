'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'reports',
  includeBasic: ['list','retrieve','create'],

  GetBillingGroupReport: telnyxMethod({
    method: 'GET',
    path: '/ledger/billing_group/reports/{id}',
  }),
  CreateBillingGroupReport: telnyxMethod({
    method: 'POST',
    path: '/ledger/billing_group/reports',
  }),

});
