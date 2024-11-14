import TelnyxResource from '../TelnyxResource';

export const PortingPhoneNumbers = TelnyxResource.extend({
  path: 'porting_phone_numbers',
  includeBasic: ['list'],
});
