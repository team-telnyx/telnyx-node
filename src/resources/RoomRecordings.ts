import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const RoomRecordings = TelnyxResource.extend({
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
