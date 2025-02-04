import TelnyxResource from '../TelnyxResource.js';

export const AiAudioTranscriptions = TelnyxResource.extend({
  path: 'ai/audio/transcriptions',
  includeBasic: ['create'],
});
