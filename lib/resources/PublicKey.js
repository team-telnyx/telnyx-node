'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({

  path: 'public_key',

  retrieve: telnyxMethod({
    method: 'GET',
  })
});
