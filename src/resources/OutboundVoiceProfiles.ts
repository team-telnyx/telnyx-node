import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const OutboundVoiceProfiles = TelnyxResource.extend({
  path: 'outbound_voice_profiles',
  includeBasic: ['list', 'retrieve', 'delete'],

  ListOutboundVoiceProfiles: telnyxMethod({
    method: 'GET',
    path: '/outbound_voice_profiles',
  }),
  DeleteOutboundVoiceProfile: telnyxMethod({
    method: 'DELETE',
    path: '/outbound_voice_profiles/{id}',
  }),
});
