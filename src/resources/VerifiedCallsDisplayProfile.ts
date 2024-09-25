import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const VerifiedCallsDisplayProfile = TelnyxResource.extend({
  path: 'verified_calls_display_profile',
  includeBasic: ['delete', 'list', 'retrieve', 'create'],

  DeleteProfile: telnyxMethod({
    method: 'DELETE',
    path: '/verified_calls_display_profiles/{id}',
    urlParams: ['id'],
  }),
  ListProfiles: telnyxMethod({
    method: 'GET',
    path: '/verified_calls_display_profiles',
  }),
  CreateProfileVerificationRequest: telnyxMethod({
    method: 'POST',
    path: '/verified_calls_display_profiles/{id}/verification_request',
    urlParams: ['id'],
  }),
});
