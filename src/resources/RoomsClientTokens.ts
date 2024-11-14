import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const RoomsClientTokens = TelnyxResource.extend({
  path: 'rooms_client_tokens',
  includeBasic: ['create'],

  refreshRoomClientToken: telnyxMethod({
    method: 'POST',
    path: '/rooms/{room/id}/actions/refresh/client_token',
    urlParams: ['room_id'],
  }),
  createRoomClientToken: telnyxMethod({
    method: 'POST',
    path: '/rooms/{room/id}/actions/generate/join/client_token',
    urlParams: ['room_id'],
  }),
});
