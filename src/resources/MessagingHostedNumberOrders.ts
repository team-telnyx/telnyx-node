import TelnyxResource from '../TelnyxResource.js';

export const MessagingHostedNumberOrders = TelnyxResource.extend({
  path: 'messaging_hosted_number_orders',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
