'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: '/room_participants',
  includeBasic: ['list', 'retrieve'],
});
