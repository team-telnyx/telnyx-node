'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'credential_connections',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
