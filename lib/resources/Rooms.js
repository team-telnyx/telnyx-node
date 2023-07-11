'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'rooms',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],
});
