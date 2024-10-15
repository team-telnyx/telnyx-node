import TelnyxResource from '../TelnyxResource';

export const MessagingHostedNumberOrders = TelnyxResource.extend({
  path: 'messaging_hosted_number_orders',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
