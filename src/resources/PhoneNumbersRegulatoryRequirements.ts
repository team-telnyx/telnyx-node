import TelnyxResource from '../TelnyxResource';

export const PhoneNumbersRegulatoryRequirements = TelnyxResource.extend({
  path: 'phone_numbers_regulatory_requirements',
  includeBasic: ['list'],
});
