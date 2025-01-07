import TelnyxResource from '../TelnyxResource.js';

export const MessagingProfileMetrics = TelnyxResource.extend({
  path: 'messaging_profile_metrics',
  includeBasic: ['list'],
});
