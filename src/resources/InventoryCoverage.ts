import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const InventoryCoverage = TelnyxResource.extend({
  path: 'inventory_coverage',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),

  request: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),
});
