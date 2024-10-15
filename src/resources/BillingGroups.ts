import TelnyxResource from '../TelnyxResource';

export const BillingGroups = TelnyxResource.extend({
  path: 'billing_groups',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
