import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const ActionsSimCards = TelnyxResource.extend({
  path: 'actions',

  register: telnyxMethod({
    method: 'POST',
    path: '/register/sim_cards',
  }),

  bulkNetworkPreferences: telnyxMethod({
    method: 'PUT',
    path: '/network_preferences/sim_cards',
  }),
});
