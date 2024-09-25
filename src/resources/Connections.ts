import TelnyxResource from '../TelnyxResource';

export const Connections = TelnyxResource.extend({
  path: 'connections',
  includeBasic: ['list', 'retrieve'],
});
