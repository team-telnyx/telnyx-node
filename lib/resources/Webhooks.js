'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'webhook_deliveries',
  includeBasic: ['list', 'retrieve'],
});
