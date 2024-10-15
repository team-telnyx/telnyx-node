import TelnyxResource from '../TelnyxResource';

export const PhoneNumbersMessaging = TelnyxResource.extend({
  path: 'phone_numbers/messaging',
  includeBasic: ['list'],
});
