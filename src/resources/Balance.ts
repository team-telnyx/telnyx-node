import TelnyxResource from '../TelnyxResource.js';
export const Balance = TelnyxResource.extend({
  path: 'balance',

  retrieve: TelnyxResource.method({method: 'GET'}),
});
