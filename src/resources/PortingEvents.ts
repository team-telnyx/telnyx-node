import TelnyxResource from '../TelnyxResource';

const telnyxMethod = TelnyxResource.method;

export const PortingEvents = TelnyxResource.extend({
  path: 'porting/events',
  includeBasic: ['list', 'retrieve'],

  show: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),

  republish: telnyxMethod({
    method: 'POST',
    path: '/{id}/republish',
    urlParams: ['id'],
  }),
});
