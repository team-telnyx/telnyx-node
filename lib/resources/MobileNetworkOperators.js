'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'mobile_network_operators',
  includeBasic: ['list','retrieve'],

  GetMobileNetworkOperators: telnyxMethod({
    method: 'GET',
    path: '/mobile_network_operators',
  }),

});
