import TelnyxResource from '../TelnyxResource';

export const Rooms = TelnyxResource.extend({
  path: 'rooms',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],
});
