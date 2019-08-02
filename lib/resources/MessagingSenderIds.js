'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'messaging_sender_ids',
  includeBasic: ['list', 'retrieve', 'create', 'update','del'],
});

