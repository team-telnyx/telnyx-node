import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const PhoneNumberBlockOrders = TelnyxResource.extend({
  path: 'phone_number_block_orders',
  includeBasic: ['list', 'retrieve'],

  RetrieveNumberBlockOrder: telnyxMethod({
    method: 'GET',
    path: '/number_block_orders/{number_block_order_id}',
    urlParams: ['number_block_order_id'],
  }),
  ListNumberBlockOrders: telnyxMethod({
    method: 'GET',
    path: '/number_block_orders',
  }),
});
