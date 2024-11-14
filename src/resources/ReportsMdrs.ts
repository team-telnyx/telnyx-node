import TelnyxResource from '../TelnyxResource';

export const ReportsMdrs = TelnyxResource.extend({
  path: '/reports/mdrs',
  includeBasic: ['list'],
});
