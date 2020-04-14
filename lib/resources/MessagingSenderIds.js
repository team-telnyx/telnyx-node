'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'alphanumeric_sender_ids', // THIS URL DOES NOT EXISTS ON DOCS
  includeBasic: ['list', 'retrieve', 'create','del'],
});

