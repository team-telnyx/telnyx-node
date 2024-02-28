'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'rooms_client_tokens',
  includeBasic: ['create'],

  RefreshRoomClientToken: telnyxMethod({
    method: 'POST',
    path: '/rooms/{room/id}/actions/refresh/client_token',
    urlParams: ['room_id'],
  }),
  CreateRoomClientToken: telnyxMethod({
    method: 'POST',
    path: '/rooms/{room/id}/actions/generate/join/client_token',
    urlParams: ['room_id'],
  }),

});
