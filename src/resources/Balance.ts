import TelnyxResource from '../TelnyxResource';
export const Balance = TelnyxResource.extend({
  path: 'balance',

  retrieve: TelnyxResource.method({method: 'GET'}),
});
