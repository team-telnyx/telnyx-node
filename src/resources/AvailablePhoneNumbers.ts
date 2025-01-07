import TelnyxResource from '../TelnyxResource.js';

export const AvailablePhoneNumbers = TelnyxResource.extend({
  path: 'available_phone_numbers',
  includeBasic: ['list'],
});
