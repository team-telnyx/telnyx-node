'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'room_recordings',
  includeBasic: ['delete'],

  DeleteRoomRecording: telnyxMethod({
    method: 'DELETE',
    path: '/room_recordings/{room/recording/id}',
    urlParams: ['room_recording_id'],
  }),
  DeleteRoomRecordings: telnyxMethod({
    method: 'DELETE',
    path: '/room_recordings',
  }),

});
