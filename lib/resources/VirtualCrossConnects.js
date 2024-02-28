'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'virtual_cross_connects',
  includeBasic: ['list','retrieve','delete','create'],

  ListVirtualCrossConnectRegions: telnyxMethod({
    method: 'GET',
    path: '/virtual_cross_connect/regions',
  }),
  DeleteVirtualCrossConnect: telnyxMethod({
    method: 'DELETE',
    path: '/virtual_cross_connects/{id}',
  }),
  GetVirtualCrossConnectRegion: telnyxMethod({
    method: 'GET',
    path: '/virtual_cross_connect/regions/{id}',
  }),
  ListVirtualCrossConnects: telnyxMethod({
    method: 'GET',
    path: '/virtual_cross_connects',
  }),
  ProvisionVirtualCrossConnect: telnyxMethod({
    method: 'POST',
    path: '/virtual_cross_connects/{id}/actions/provision',
  }),

});
