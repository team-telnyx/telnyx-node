'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'documents',
  includeBasic: ['list', 'retrieve'],

  upload: telnyxMethod({
    method: 'POST',
  })
});
