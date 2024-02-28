'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'wdr_detail_reports',
  includeBasic: ['list','retrieve'],

  GetPaginatedWdrs: telnyxMethod({
    method: 'GET',
    path: '/reports/wdrs',
  }),

});
