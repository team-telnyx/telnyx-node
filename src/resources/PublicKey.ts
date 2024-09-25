import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const PublicKey = TelnyxResource.extend({
  path: 'public_key',

  retrieve: telnyxMethod({
    method: 'GET',
  }),
});
