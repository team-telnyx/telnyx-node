import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const SimCardActions = TelnyxResource.extend({
  path: 'sim_card_actions',
  includeBasic: ['list', 'retrieve'],

  ListSimCardActions: telnyxMethod({
    method: 'GET',
    path: '/sim/card/actions',
  }),
  ListBulkSimCardActions: telnyxMethod({
    method: 'GET',
    path: '/bulk/sim/card/actions',
  }),
  GetBulkSimCardAction: telnyxMethod({
    method: 'GET',
    path: '/bulk/sim/card/actions/{id}',
  }),
  GetSimCardAction: telnyxMethod({
    method: 'GET',
    path: '/sim/card/actions/{id}',
  }),
});
