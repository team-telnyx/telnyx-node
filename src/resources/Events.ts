import TelnyxResource from '../TelnyxResource';

export const Events = TelnyxResource.extend({
  path: 'events',
  includeBasic: ['list', 'retrieve'],
});
