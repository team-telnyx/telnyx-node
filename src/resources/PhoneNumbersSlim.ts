import TelnyxResource from '../TelnyxResource.js';

export const PhoneNumbersSlim = TelnyxResource.extend({
  path: 'phone_numbers/slim',
  includeBasic: ['list'],
});
