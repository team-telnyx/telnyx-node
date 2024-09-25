import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const CallInformation = TelnyxResource.extend({
  path: 'call_information',
  includeBasic: ['list', 'retrieve'],

  ListConnectionActiveCalls: telnyxMethod({
    method: 'GET',
    path: '/connections/{connection/id}/active_calls',
  }),
});
