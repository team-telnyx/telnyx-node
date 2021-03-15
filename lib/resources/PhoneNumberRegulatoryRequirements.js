'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'phone_numbers_regulatory_requirements',

  includeBasic: ['list'],
});
