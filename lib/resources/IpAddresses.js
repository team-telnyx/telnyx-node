'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'ip_addresses',
  includeBasic: ['list','retrieve','delete'],

  ListAccessIpAddresses: telnyxMethod({
    method: 'GET',
    path: '/access_ip_address',
  }),
  DeleteAccessIpAddress: telnyxMethod({
    method: 'DELETE',
    path: '/access_ip_address_{access_ip_address_id}',
    urlParams: ['access_ip_address_id'],
  }),

});
