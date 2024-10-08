import TelnyxResource from '../TelnyxResource';

export const NotificationEvents = TelnyxResource.extend({
  path: 'notification_events',
  includeBasic: ['list'],
});
