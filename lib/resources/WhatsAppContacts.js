'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = require('../TelnyxResource').extend({
  path: 'whatsapp_contacts',

  check: telnyxMethod({
      method: 'POST'
  })
});
