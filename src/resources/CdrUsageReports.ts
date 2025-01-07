import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const CdrUsageReports = TelnyxResource.extend({
  path: 'reports/cdr_usage_reports',

  retrieveUsageReportSync: telnyxMethod({
    path: '/sync',
    method: 'GET',
    urlParams: [],
  }),
});
