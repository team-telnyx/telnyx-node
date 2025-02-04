import TelnyxResource from '../TelnyxResource.js';

export const SimCardOrders = TelnyxResource.extend({
  path: 'sim_card_orders',
  includeBasic: ['list', 'retrieve'],
});
