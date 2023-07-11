'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'messaging_hosted_number_orders',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
