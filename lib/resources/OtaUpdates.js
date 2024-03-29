'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'ota_updates',
  includeBasic: ['list','retrieve'],

  GetOtaUpdate: telnyxMethod({
    method: 'GET',
    path: '/ota_updates/{id}',
  }),
  ListOtaUpdates: telnyxMethod({
    method: 'GET',
    path: '/ota_updates',
  }),

});
