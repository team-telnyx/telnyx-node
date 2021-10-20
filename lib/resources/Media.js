'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'media',
  includeBasic: ['list', 'retrieve', 'del'],

  upload: telnyxMethod({
    method: 'POST',
  }),

  update: telnyxMethod({
    method: 'PUT',
    path: '/{id}',
    urlParams: ['id']
  }),

  download: telnyxMethod({
    method: 'GET',
    path: '/{id}/download',
    urlParams: ['id']
  }),
});