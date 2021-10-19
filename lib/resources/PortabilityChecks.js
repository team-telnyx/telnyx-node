'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'portability_checks',

  run: telnyxMethod({
    method: 'POST'
  }),
});
