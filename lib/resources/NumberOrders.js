'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'number_orders',
  includeBasic: ['list', 'retrieve', 'create', 'update'],
});

