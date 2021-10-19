'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'inventory_coverage',

  request: telnyxMethod({
    method: 'GET',
    methodType: 'list'
  })
});
