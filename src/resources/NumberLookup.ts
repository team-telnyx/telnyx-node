import TelnyxResource from '../TelnyxResource';

export const NumberLookup = TelnyxResource.extend({
  path: 'number_lookup',
  includeBasic: ['retrieve'],
});
