import TelnyxResource from '../TelnyxResource';

export const WirelessDetailRecordReports = TelnyxResource.extend({
  path: 'wireless/detail_records_reports',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
