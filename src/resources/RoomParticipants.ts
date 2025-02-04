import TelnyxResource from '../TelnyxResource.js';

export const RoomParticipants = TelnyxResource.extend({
  path: '/room_participants',
  includeBasic: ['list', 'retrieve'],
});
