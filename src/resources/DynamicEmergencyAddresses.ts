import TelnyxResource from '../TelnyxResource.js';

export const DynamicEmergencyAddresses = TelnyxResource.extend({
  path: 'dynamic_emergency_addresses',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
