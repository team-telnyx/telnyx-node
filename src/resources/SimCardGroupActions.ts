import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const SimCardGroupActions = TelnyxResource.extend({
  path: 'sim_card_group_actions',
  includeBasic: ['list', 'retrieve'],

  GetSimCardGroupAction: telnyxMethod({
    method: 'GET',
    path: '/sim_card_group/actions/{id}',
  }),
  GetSimCardGroupActions: telnyxMethod({
    method: 'GET',
    path: '/sim_card_group/actions',
  }),
});
