import TelnyxResource from '../TelnyxResource';

export const AvailablePhoneNumbers = TelnyxResource.extend({
  path: 'available_phone_numbers',
  includeBasic: ['list', 'retrieve'],
});
