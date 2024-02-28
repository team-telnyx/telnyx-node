'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'networks',
  includeBasic: ['delete','list','retrieve'],

  DeleteNetwork: telnyxMethod({
    method: 'DELETE',
    path: '/networks/{id}',
  }),
  ListNetworkInterfaces: telnyxMethod({
    method: 'GET',
    path: '/networks/{id}/network_interfaces',
  }),
  ListNetworks: telnyxMethod({
    method: 'GET',
    path: '/networks',
  }),
  DeleteDefaultGateway: telnyxMethod({
    method: 'DELETE',
    path: '/networks/{id}/default_gateway',
  }),

});
