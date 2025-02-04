import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const MobileNetworkOperators = TelnyxResource.extend({
  path: 'mobile_network_operators',
  includeBasic: ['list', 'retrieve'],

  GetMobileNetworkOperators: telnyxMethod({
    method: 'GET',
    path: '/mobile_network_operators',
  }),
});
