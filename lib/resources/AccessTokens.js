'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = require('../TelnyxResource').extend({
  path: 'access_tokens',
  basePath: '/v2-beta',

  create: telnyxMethod({
    method: 'POST',
  }),

  refresh: telnyxMethod({
    method: 'POST',
    path: '/actions/refresh'
  }),
});
