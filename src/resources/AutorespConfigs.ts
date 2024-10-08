import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const AutorespConfigs = TelnyxResource.extend({
  path: 'messaging_profiles/{profile_id}/autoresp_configs',
  includeBasic: ['del', 'list', 'create', 'retrieve'],

  update: telnyxMethod({
    method: 'PUT',
    path: '/{autoresp_cfg_id}',
    urlParams: ['profile_id', 'autoresp_cfg_id'],
  }),
});
