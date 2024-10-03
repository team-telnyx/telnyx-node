import TelnyxResource from '../TelnyxResource';

export const Messages = TelnyxResource.extend({
  path: 'messages',
  includeBasic: ['create', 'retrieve'],
});
