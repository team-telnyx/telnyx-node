import TelnyxResource from '../TelnyxResource';

export const MessagingProfileMetrics = TelnyxResource.extend({
  path: 'messaging_profile_metrics',
  includeBasic: ['list'],
});
