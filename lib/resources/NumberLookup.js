'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'number_lookup',
  includeBasic: ['retrieve'],
});
