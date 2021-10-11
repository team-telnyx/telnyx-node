'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'dynamic_emergency_endpoints',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
