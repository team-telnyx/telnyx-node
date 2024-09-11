// @ts-ignore - TODO: convert to ts
import {TelnyxResource} from '../../lib/TelnyxResource.js';
export const Balance = TelnyxResource.extend({
  path: 'balance',

  retrieve: TelnyxResource.method({method: 'GET'}),
});
