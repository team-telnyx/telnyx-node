'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: '/room_sessions',

  list: telnyxMethod({
    method: 'GET',
  }),

  retrieveRoomSessionId: telnyxMethod({
    method: 'GET',
    path: '/{room_session_id}',
    urlParams: ['room_session_id'],
  }),
  muteSession: telnyxMethod({
    method: 'POST',
    path: '/{room_session_id}/actions/mute',
    urlParams: ['room_session_id'],
  }),
  unmuteSession: telnyxMethod({
    method: 'POST',
    path: '/{room_session_id}/actions/unmute',
    urlParams: ['room_session_id'],
  }),
  kickParticipant: telnyxMethod({
    method: 'POST',
    path: '/{room_session_id}/actions/kick',
    urlParams: ['room_session_id'],
  }),
  endSession: telnyxMethod({
    method: 'POST',
    path: '/{room_session_id}/actions/end',
    urlParams: ['room_session_id'],
  }),
  retrieveParticipants: telnyxMethod({
    method: 'GET',
    path: '/{room_session_id}/participants',
    urlParams: ['room_session_id'],
  }),
});
