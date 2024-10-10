import TelnyxResource from '../TelnyxResource';

export const PhoneNumbersVoice = TelnyxResource.extend({
  path: 'phone_numbers/voice',
  includeBasic: ['list'],
});
