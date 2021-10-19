'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'dynamic_emergency_addresses',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
