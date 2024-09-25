import TelnyxResource from '../TelnyxResource';

export const ClientStateUpdate = TelnyxResource.extend({
  path: '/actions/client_state_update',
  includeBasic: ['update'],
});
