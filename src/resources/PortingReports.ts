import TelnyxResource from '../TelnyxResource';

export const PortingReports = TelnyxResource.extend({
  path: 'porting/reports',
  includeBasic: ['list', 'create', 'retrieve'],
});
