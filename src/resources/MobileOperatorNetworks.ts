import TelnyxResource from '../TelnyxResource.js';

export const MobileOperatorNetworks = TelnyxResource.extend({
  path: 'mobile_operator_networks',
  includeBasic: ['list'],
});
