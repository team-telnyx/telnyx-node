import TelnyxResource from '../TelnyxResource';

export const SimCardOrders = TelnyxResource.extend({
  path: 'sim_card_orders',
  includeBasic: ['list', 'retrieve'],
});
