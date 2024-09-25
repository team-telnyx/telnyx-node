import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Billing = TelnyxResource.extend({
  path: 'billing',
  includeBasic: ['list', 'retrieve'],

  GetUserBalance: telnyxMethod({
    method: 'GET',
    path: '/balance',
  }),
});
