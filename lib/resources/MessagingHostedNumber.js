'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'messaging_hosted_number',
  includeBasic: ['list','retrieve','delete','create'],

  ListMessagingHostedNumberOrders: telnyxMethod({
    method: 'GET',
    path: '/messaging_hosted_number_orders',
  }),
  DeleteMessagingHostedNumber: telnyxMethod({
    method: 'DELETE',
    path: '/messaging_hosted_numbers/{id}',
    urlParams: ['id'],
  }),
  GetMessagingHostedNumberOrder: telnyxMethod({
    method: 'GET',
    path: '/messaging_hosted_number_orders/{id}',
    urlParams: ['id'],
  }),
  UploadMessagingHostedNumberOrderFile: telnyxMethod({
    method: 'POST',
    path: '/messaging_hosted_number_orders/{id}/actions/file_upload',
    urlParams: ['id'],
  }),

});
