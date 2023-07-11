'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'access_ip_ranges',
  includeBasic: ['list', 'create', 'retrieve', 'del'],
});
