'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: '/room_compositions',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
