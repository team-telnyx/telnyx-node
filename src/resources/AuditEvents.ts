import TelnyxResource from '../TelnyxResource.js';

export const AuditEvents = TelnyxResource.extend({
  path: 'audit_events',
  includeBasic: ['list'],
});
