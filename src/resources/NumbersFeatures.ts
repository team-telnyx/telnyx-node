import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const NumbersFeatures = TelnyxResource.extend({
  path: 'numbers_features',
  includeBasic: ['create'],

  PostNumbersFeatures: telnyxMethod({
    method: 'POST',
    path: '/numbers_features',
  }),
});
