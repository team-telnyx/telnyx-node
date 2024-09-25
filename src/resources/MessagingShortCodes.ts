import TelnyxResource from '../TelnyxResource';

export const MessagingShortCodes = TelnyxResource.extend({
  path: 'short_codes',
  includeBasic: ['list', 'retrieve', 'update'],
});
