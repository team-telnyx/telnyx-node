'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'connections',
  includeBasic: ['list', 'retrieve'],
});
