import TelnyxResource from '../TelnyxResource.js';

export const PhoneNumbersVoice = TelnyxResource.extend({
  path: 'phone_numbers/voice',
  includeBasic: ['list'],
});
