import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiAudioTranscriptionsCreateParams =
      paths['/ai/audio/transcriptions']['post']['requestBody']['content']['multipart/form-data'];

    type AiAudioTranscriptionsCreateResponse =
      paths['/ai/audio/transcriptions']['post']['responses']['200']['content']['application/json'];

    class AiAudioTranscriptionsResource {
      create(
        params: AiAudioTranscriptionsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiAudioTranscriptionsCreateResponse>>;
    }
  }
}
