'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'global_ips',
  includeBasic: ['delete','list','retrieve'],

  DeleteGlobalIpAssignment: telnyxMethod({
    method: 'DELETE',
    path: '/global_ip_assignments/{id}',
  }),
  DeleteGlobalIpHealthCheck: telnyxMethod({
    method: 'DELETE',
    path: '/global_ip_health/checks/{id}',
  }),
  DeleteGlobalIp: telnyxMethod({
    method: 'DELETE',
    path: '/global/ips/{id}',
  }),
  ListGlobalIpAssignments: telnyxMethod({
    method: 'GET',
    path: '/global_ip_assignments',
  }),
  ListGlobalIpProtocols: telnyxMethod({
    method: 'GET',
    path: '/global_ip_protocols',
  }),
  ListGlobalIps: telnyxMethod({
    method: 'GET',
    path: '/global/ips',
  }),
  ListGlobalIpHealthChecks: telnyxMethod({
    method: 'GET',
    path: '/global_ip_health/checks',
  }),
  ListGlobalIpAllowedPorts: telnyxMethod({
    method: 'GET',
    path: '/global_ip_allowed/ports',
  }),
  ListGlobalIpHealthCheckTypes: telnyxMethod({
    method: 'GET',
    path: '/global_ip_health/check/types',
  }),

});
