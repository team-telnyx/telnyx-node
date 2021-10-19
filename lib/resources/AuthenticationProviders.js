'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'authentication_providers',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],
});
