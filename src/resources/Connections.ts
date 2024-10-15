import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Connections = TelnyxResource.extend({
  path: 'connections',
  includeBasic: ['list', 'retrieve'],

  listActiveCalls: telnyxMethod({
    method: 'GET',
    path: '/{connection_id}/active_calls',
  }),
});
