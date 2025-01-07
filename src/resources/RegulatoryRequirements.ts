import TelnyxResource from '../TelnyxResource.js';

export const RegulatoryRequirements = TelnyxResource.extend({
  path: 'regulatory_requirements',

  includeBasic: ['list'],
});
