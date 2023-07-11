'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'billing_groups',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
