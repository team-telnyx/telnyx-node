'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'notification_profiles',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del']
});
