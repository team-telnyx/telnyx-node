import TelnyxResource from '../TelnyxResource';

export const MessagingPhoneNumbers = TelnyxResource.extend({
  path: 'messaging_phone_numbers',
  includeBasic: ['list', 'retrieve', 'update'],
});
