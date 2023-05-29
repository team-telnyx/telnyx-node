'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'detail_records',

  query: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),
});
