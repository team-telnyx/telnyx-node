import TelnyxResource from '../TelnyxResource';

export const NumberOrders = TelnyxResource.extend({
  path: 'number_orders',
  includeBasic: ['list', 'retrieve', 'create', 'update'],
});
