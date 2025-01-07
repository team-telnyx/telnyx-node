import TelnyxResource from '../TelnyxResource.js';

export const CallEvents = TelnyxResource.extend({
  path: 'call_events',
  includeBasic: ['list'],
});
