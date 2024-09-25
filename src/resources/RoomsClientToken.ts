import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const RoomsClientToken = TelnyxResource.extend({
  path: 'rooms/{room_id}/actions',
  retrieveGenerateJoinClientToken: telnyxMethod({
    method: 'POST',
    path: '/generate_join_client_token',
    urlParams: ['room_id'],
  }),
  retrieveRefreshClientToken: telnyxMethod({
    method: 'POST',
    path: '/refresh_client_token',
    urlParams: ['room_id'],
  }),
});
