'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'sim_card_actions',
  includeBasic: ['list', 'retrieve'],
});
