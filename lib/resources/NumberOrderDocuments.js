'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'number_order_documents',
  includeBasic: ['list', 'retrieve', 'update'],

  upload: telnyxMethod({
    method: 'POST',
    methodType: 'create',
  }),
});

