import TelnyxResource from '../TelnyxResource.js';

export const PhoneNumbersMessaging = TelnyxResource.extend({
  path: 'phone_numbers/messaging',
  includeBasic: ['list'],
});
