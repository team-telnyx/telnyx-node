import TelnyxResource from '../TelnyxResource';

export const PhoneNumberRegulatoryRequirements = TelnyxResource.extend({
  path: 'phone_numbers_regulatory_requirements',

  includeBasic: ['list'],
});
