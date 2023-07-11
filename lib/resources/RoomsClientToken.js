'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'rooms/{room_id}/actions',
  retrieveGenerateJoinClientToken: telnyxMethod({
    method: 'POST',
    path: '/generate_join_client_token',
    urlParams: ['room_id'],
  }),
  retrieveRefreshClientToken: telnyxMethod({
    method: 'POST',
    path: '/refresh_client_token',
    urlParams: ['room_id'],
  }),
});
