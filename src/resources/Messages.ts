import TelnyxResource from '../TelnyxResource';
import {MessagesAlphanumericSenderId} from './MessagesAlphanumericSenderId';

export const Messages = TelnyxResource.extend({
  path: 'messages',
  includeBasic: ['create', 'retrieve'],

  nestedResources: {
    AlphanumericSenderId: MessagesAlphanumericSenderId,
  },
});
