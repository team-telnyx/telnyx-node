import TelnyxResource from '../TelnyxResource.js';

export const PortingReports = TelnyxResource.extend({
  path: 'porting/reports',
  includeBasic: ['list', 'create', 'retrieve'],
});
