import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const MdrUsageReports = TelnyxResource.extend({
  path: 'mdr_usage_reports',
  includeBasic: ['delete', 'list', 'retrieve'],

  DeleteUsageReport: telnyxMethod({
    method: 'DELETE',
    path: '/reports/mdr_/usage_reports/{id}',
    urlParams: ['id'],
  }),
  GetUsageReportSync: telnyxMethod({
    method: 'GET',
    path: '/reports/mdr_/usage_reports/sync',
  }),
  GetUsageReports: telnyxMethod({
    method: 'GET',
    path: '/reports/mdr_/usage_reports',
  }),
});
