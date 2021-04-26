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

  grants: {

    /**
     * Create AccessTokens grants for Video Rooms
     *
     * @param options An options object.
     * @param options.actions An array of possible actions.
     * @param options.roomId The id of the Room to create a grant for.
     */
    videoGrant: function videoGrant (options) {
      var defaultActions = ['join'];

      return {
        actions: options.actions || defaultActions,
        resources: ['telnyx:video:rooms:' + options.roomId]
      }
    }
  }
});
