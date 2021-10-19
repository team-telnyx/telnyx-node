'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'porting_phone_numbers',
  includeBasic: ['list']
});
