import TelnyxResource from '../TelnyxResource';

export const RoomParticipants = TelnyxResource.extend({
  path: '/room_participants',
  includeBasic: ['list', 'retrieve'],
});
