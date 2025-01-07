import TelnyxResource from '../TelnyxResource.js';

export const BillingGroups = TelnyxResource.extend({
  path: 'billing_groups',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
