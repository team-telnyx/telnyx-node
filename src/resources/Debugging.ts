import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Debugging = TelnyxResource.extend({
  path: 'debugging',
  includeBasic: ['list', 'retrieve'],

  ListCallEvents: telnyxMethod({
    method: 'GET',
    path: '/call_events',
  }),
});
