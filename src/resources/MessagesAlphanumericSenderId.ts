import TelnyxResource from '../TelnyxResource';

export const MessagesAlphanumericSenderId = TelnyxResource.extend({
  path: 'messages/alphanumeric_sender_id',
  includeBasic: ['create'],
});
