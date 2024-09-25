import TelnyxResource from '../TelnyxResource';

export const RoomCompositions = TelnyxResource.extend({
  path: '/room_compositions',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
