'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'mdr_detail_reports',
  includeBasic: ['list','retrieve','delete'],

  GetCdrRequests: telnyxMethod({
    method: 'GET',
    path: '/reports/batch_mdr_reports',
  }),
  GetPaginatedMdrs: telnyxMethod({
    method: 'GET',
    path: '/reports/mdrs',
  }),
  DeleteMdrRequest: telnyxMethod({
    method: 'DELETE',
    path: '/reports/batch_mdr_reports/{id}',
    urlParams: ['id'],
  }),

});
