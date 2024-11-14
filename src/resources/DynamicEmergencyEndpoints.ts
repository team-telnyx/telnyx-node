import TelnyxResource from '../TelnyxResource';

export const DynamicEmergencyEndpoints = TelnyxResource.extend({
  path: 'dynamic_emergency_endpoints',
  includeBasic: ['list', 'retrieve', 'create', 'del'],
});
