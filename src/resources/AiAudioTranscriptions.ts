import TelnyxResource from '../TelnyxResource';

export const AiAudioTranscriptions = TelnyxResource.extend({
  path: 'ai/audio/transcriptions',
  includeBasic: ['create'],
});
