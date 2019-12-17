'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'phone_number_regulatory_requirements',

  includeBasic: ['list'],
});
