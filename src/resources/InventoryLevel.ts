import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const InventoryLevel = TelnyxResource.extend({
  path: 'inventory_level',
  includeBasic: ['list', 'retrieve'],

  CreateInventoryCoverage: telnyxMethod({
    method: 'GET',
    path: '/inventory_coverage',
  }),
});
