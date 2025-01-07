import TelnyxResource from '../TelnyxResource.js';

export const MessagingShortCodes = TelnyxResource.extend({
  path: 'short_codes',
  includeBasic: ['list', 'retrieve', 'update'],
});
