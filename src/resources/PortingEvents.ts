import TelnyxResource from '../TelnyxResource';

const telnyxMethod = TelnyxResource.method;

export const PortingEvents = TelnyxResource.extend({
  path: 'porting/events',
  includeBasic: ['list', 'retrieve'],

  republish: telnyxMethod({
    method: 'POST',
    path: '/{id}/republish',
    urlParams: ['id'],
  }),
});
