'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  path: 'balance',

  retrieve: TelnyxResource.method({
    method: 'GET',
  })
});
