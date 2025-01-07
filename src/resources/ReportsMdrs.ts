import TelnyxResource from '../TelnyxResource.js';

export const ReportsMdrs = TelnyxResource.extend({
  path: '/reports/mdrs',
  includeBasic: ['list'],
});
