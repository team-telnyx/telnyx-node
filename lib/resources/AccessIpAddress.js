'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'access_ip_address',
  includeBasic: ['list', 'create', 'retrieve', 'del'],
});
