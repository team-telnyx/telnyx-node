import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const PortabilityChecks = TelnyxResource.extend({
  path: 'portability_checks',

  run: telnyxMethod({
    method: 'POST',
  }),
});
