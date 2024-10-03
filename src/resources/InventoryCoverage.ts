import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const InventoryCoverage = TelnyxResource.extend({
  path: 'inventory_coverage',

  retrieve: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),

  request: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),
});
