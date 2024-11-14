import TelnyxResource from '../TelnyxResource';

export const MobileOperatorNetworks = TelnyxResource.extend({
  path: 'mobile_operator_networks',
  includeBasic: ['list'],
});
