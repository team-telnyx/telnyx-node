import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const Networks = TelnyxResource.extend({
  path: 'networks',
  includeBasic: ['delete', 'list', 'retrieve'],

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
