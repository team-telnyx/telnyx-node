'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'cdr_usage_reports',
  includeBasic: ['list','retrieve'],

  GetUsageReportSync: telnyxMethod({
    method: 'GET',
    path: '/reports/cdr_usage_reports/sync',
  }),

});
