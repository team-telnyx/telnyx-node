import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const CdrUsageReports = TelnyxResource.extend({
  path: 'cdr_usage_reports',
  includeBasic: ['list', 'retrieve'],

  GetUsageReportSync: telnyxMethod({
    method: 'GET',
    path: '/reports/cdr_usage_reports/sync',
  }),
});
