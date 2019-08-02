'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'messaging_short_codes',
  includeBasic: ['list', 'retrieve', 'update'],
});

