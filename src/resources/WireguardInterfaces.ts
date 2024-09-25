import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const WireguardInterfaces = TelnyxResource.extend({
  path: 'wireguard_interfaces',
  includeBasic: ['list', 'retrieve', 'delete'],

  GetWireguardPeerAllowedIp: telnyxMethod({
    method: 'GET',
    path: '/wireguard_peers/{id}/allowed_ips/{child_id}',
  }),
  DeleteWireguardInterface: telnyxMethod({
    method: 'DELETE',
    path: '/wireguard_interfaces/{id}',
  }),
  DeleteWireguardPeer: telnyxMethod({
    method: 'DELETE',
    path: '/wireguard_peers/{id}',
  }),
  ListWireguardPeers: telnyxMethod({
    method: 'GET',
    path: '/wireguard_peers',
  }),
  GetWireguardPeerConfig: telnyxMethod({
    method: 'GET',
    path: '/wireguard_peers/{id}/config',
  }),
  ListWireguardInterfaces: telnyxMethod({
    method: 'GET',
    path: '/wireguard_interfaces',
  }),
  ListWireguardPeerAllowedIps: telnyxMethod({
    method: 'GET',
    path: '/wireguard_peers/{id}/allowed_ips',
  }),
});
