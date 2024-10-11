import TelnyxResource from '../TelnyxResource';

export const AvailablePhoneNumbersBlocks = TelnyxResource.extend({
  path: 'available_phone_number_blocks',
  includeBasic: ['list'],
});
