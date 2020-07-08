'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'balance',

  get: TelnyxResource.method({
    method: 'GET',
  })
});
