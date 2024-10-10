import TelnyxResource from '../TelnyxResource';

export const VerifiedNumbers = TelnyxResource.extend({
  path: 'verified_numbers',
  includeBasic: ['list', 'retrieve', 'del'],
});
