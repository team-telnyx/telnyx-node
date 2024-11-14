import TelnyxResource from '../TelnyxResource';

export const AuditEvents = TelnyxResource.extend({
  path: 'audit_events',
  includeBasic: ['list'],
});
