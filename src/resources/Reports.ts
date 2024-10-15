import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Reports = TelnyxResource.extend({
  path: 'reports',
  includeBasic: ['list', 'retrieve', 'create'],

  GetBillingGroupReport: telnyxMethod({
    method: 'GET',
    path: '/ledger/billing_group/reports/{id}',
  }),
  CreateBillingGroupReport: telnyxMethod({
    method: 'POST',
    path: '/ledger/billing_group/reports',
  }),
});
