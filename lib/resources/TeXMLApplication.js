'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'texml_applications',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],
});
