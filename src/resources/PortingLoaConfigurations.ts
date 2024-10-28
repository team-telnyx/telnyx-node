import TelnyxResource from '../TelnyxResource';

const telnyxMethod = TelnyxResource.method;

export const PortingLoaConfigurations = TelnyxResource.extend({
  path: 'porting/loa_configurations',
  includeBasic: ['list', 'create', 'retrieve', 'del', 'update'],

  preview: telnyxMethod({
    method: 'GET',
    path: '/{id}/preview',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),
});
