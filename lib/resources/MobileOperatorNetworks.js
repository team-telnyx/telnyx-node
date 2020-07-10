'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'mobile_operator_networks',
  includeBasic: ['list'],
});
