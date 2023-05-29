'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'whatsapp_messages',
  includeBasic: ['create', 'update'],
});
