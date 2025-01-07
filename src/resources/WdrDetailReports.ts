import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const WdrDetailReports = TelnyxResource.extend({
  path: 'wdr_detail_reports',
  includeBasic: ['list', 'retrieve'],

  GetPaginatedWdrs: telnyxMethod({
    method: 'GET',
    path: '/reports/wdrs',
  }),
});
