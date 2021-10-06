'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'wireless/detail_records_reports',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
