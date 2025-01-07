import TelnyxResource from '../TelnyxResource.js';

export const NotificationEvents = TelnyxResource.extend({
  path: 'notification_events',
  includeBasic: ['list'],
});
