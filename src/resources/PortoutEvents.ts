import TelnyxResource from '../TelnyxResource';

const telnyxMethod = TelnyxResource.method;

export const PortoutEvents = TelnyxResource.extend({
  path: 'portout/events',
  includeBasic: ['list', 'retrieve'],

  republish: telnyxMethod({
    method: 'POST',
    path: '/{id}/republish',
    urlParams: ['id'],
  }),
});
