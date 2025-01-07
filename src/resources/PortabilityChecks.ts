import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const PortabilityChecks = TelnyxResource.extend({
  path: 'portability_checks',
  includeBasic: ['create'],

  run: telnyxMethod({
    method: 'POST',
  }),
});
