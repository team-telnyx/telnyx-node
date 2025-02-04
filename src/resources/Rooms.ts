import TelnyxResource from '../TelnyxResource.js';

export const Rooms = TelnyxResource.extend({
  path: 'rooms',
  includeBasic: ['list', 'create', 'retrieve', 'update', 'del'],
});
