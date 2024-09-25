import TelnyxResource from '../TelnyxResource';

export const VerifiedCallsDisplayProfiles = TelnyxResource.extend({
  path: 'verified_calls_display_profiles',

  create: TelnyxResource.method({
    method: 'POST',
    path: '/{id}/verification_request',
    urlParams: ['id'],
  }),
});
