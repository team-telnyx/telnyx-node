'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'advanced_optinoptout',
  includeBasic: ['delete','list','retrieve'],

  DeleteAutorespConfig: telnyxMethod({
    method: 'DELETE',
    path: '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}',
    urlParams: ['profile_id', 'autoresp_cfg_id'],
  }),
  GetAutorespConfigs: telnyxMethod({
    method: 'GET',
    path: '/messaging_profiles/{profile/id}/autoresp_configs',
    urlParams: ['profile_id'],
  }),

});
