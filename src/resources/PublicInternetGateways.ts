import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const PublicInternetGateways = TelnyxResource.extend({
  path: 'public_internet_gateways',
  includeBasic: ['delete', 'list', 'retrieve'],

  DeletePublicInternetGateway: telnyxMethod({
    method: 'DELETE',
    path: '/public_internet_gateways/{id}',
  }),
  ListPublicInternetGateways: telnyxMethod({
    method: 'GET',
    path: '/public_internet_gateways',
  }),
});
