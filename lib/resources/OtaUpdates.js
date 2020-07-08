'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'ota_updates',

  includeBasic: ['list', 'retrieve'],
});
