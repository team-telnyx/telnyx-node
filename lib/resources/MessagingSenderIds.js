'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'alphanumeric_sender_ids',
  includeBasic: ['list', 'retrieve', 'create','del'],
});

