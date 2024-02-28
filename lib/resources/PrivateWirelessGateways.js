'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'private_wireless_gateways',
  includeBasic: ['list','retrieve','delete'],

  GetPrivateWirelessGateways: telnyxMethod({
    method: 'GET',
    path: '/private_wireless_gateways',
  }),
  DeleteWirelessGateway: telnyxMethod({
    method: 'DELETE',
    path: '/private_wireless_gateways/{id}',
  }),

});
