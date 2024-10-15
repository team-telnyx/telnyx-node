import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const CdrUsageReports = TelnyxResource.extend({
  path: 'reports/cdr_usage_reports',

  retrieveUsageReportSync: telnyxMethod({
    path: '/sync',
    method: 'GET',
    urlParams: [],
  }),
});
