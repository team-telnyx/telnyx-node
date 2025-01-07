import TelnyxResource from '../TelnyxResource.js';

export const RoomCompositions = TelnyxResource.extend({
  path: '/room_compositions',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
