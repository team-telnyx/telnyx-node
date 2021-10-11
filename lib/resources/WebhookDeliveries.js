'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'webhook_deliveries',
  includeBasic: ['list', 'retrieve'],
});
