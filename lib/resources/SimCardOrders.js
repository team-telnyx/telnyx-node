'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'sim_card_orders',
  includeBasic: ['list', 'retrieve'],
});
