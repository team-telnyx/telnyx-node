import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Reporting = TelnyxResource.extend({
  path: 'reporting',
  includeBasic: ['list', 'retrieve', 'delete'],

  GetWdrReports: telnyxMethod({
    method: 'GET',
    path: '/wireless_detail_records/reports',
  }),
  DeleteWdrReport: telnyxMethod({
    method: 'DELETE',
    path: '/wireless_detail_records/reports/{id}',
  }),
});
