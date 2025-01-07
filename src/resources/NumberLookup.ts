import TelnyxResource from '../TelnyxResource.js';

export const NumberLookup = TelnyxResource.extend({
  path: 'number_lookup',
  includeBasic: ['retrieve'],
});
