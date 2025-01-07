import TelnyxResource from '../TelnyxResource.js';

export const PortingPhoneNumbers = TelnyxResource.extend({
  path: 'porting_phone_numbers',
  includeBasic: ['list'],
});
