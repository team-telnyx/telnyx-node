'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'short_codes',
  includeBasic: ['list', 'retrieve', 'update'],
});

