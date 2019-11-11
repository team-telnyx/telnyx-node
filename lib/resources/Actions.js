'use strict';

module.exports = require('../TelnyxResource').extend({
  path: 'actions',

  nestedResources: {
    SimCards: require('./ActionsSimCards')
  },
});
