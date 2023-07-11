'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'verified_numbers',
  includeBasic: ['list', 'retrieve', 'del'],
});
