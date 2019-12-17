'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'regulatory_requirements',

  includeBasic: ['list', 'retrieve'],
});
