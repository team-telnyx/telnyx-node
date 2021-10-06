'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'managed_accounts',
  includeBasic: ['list', 'create', 'retrieve'],

  enable: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/enable',
    urlParams: ['id'],
  }),

  disable: telnyxMethod({
    method: 'POST',
    path: '/{id}/actions/disable',
    urlParams: ['id'],
  }),
});
