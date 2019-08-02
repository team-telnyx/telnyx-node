'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'available_phone_numbers',
  includeBasic: ['list', 'retrieve'],
});

