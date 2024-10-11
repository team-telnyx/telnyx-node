import TelnyxResource from '../TelnyxResource';

export const PhoneNumbersSlim = TelnyxResource.extend({
  path: 'phone_numbers/slim',
  includeBasic: ['list'],
});
