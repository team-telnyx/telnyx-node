'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'messages',
  includeBasic: ['create', 'retrieve'],

  nestedResources: {
    AlphanumericSenderId: require('./MessagesAlphanumericSenderId')
  },
});
