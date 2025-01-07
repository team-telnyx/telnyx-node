import TelnyxResource from '../TelnyxResource.js';

export const WirelessDetailRecordReports = TelnyxResource.extend({
  path: 'wireless/detail_records_reports',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
