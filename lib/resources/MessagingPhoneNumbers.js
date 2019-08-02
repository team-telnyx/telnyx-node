'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'messaging_phone_numbers',
  includeBasic: ['list', 'retrieve', 'update'],
});

