import TelnyxResource from '../TelnyxResource';

export const RegulatoryRequirements = TelnyxResource.extend({
  path: 'regulatory_requirements',

  includeBasic: ['list', 'retrieve'],
});
