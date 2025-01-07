import TelnyxResource from '../TelnyxResource.js';

const telnyxMethod = TelnyxResource.method;

export const PortoutEvents = TelnyxResource.extend({
  path: 'portouts/events',
  includeBasic: ['list', 'retrieve'],

  republish: telnyxMethod({
    method: 'POST',
    path: '/{id}/republish',
    urlParams: ['id'],
  }),
});
