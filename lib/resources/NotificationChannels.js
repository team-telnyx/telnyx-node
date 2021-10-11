'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'notification_channels',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del']
});
