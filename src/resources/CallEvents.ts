import TelnyxResource from '../TelnyxResource';

export const CallEvents = TelnyxResource.extend({
  path: 'call_events',
  includeBasic: ['list'],
});
