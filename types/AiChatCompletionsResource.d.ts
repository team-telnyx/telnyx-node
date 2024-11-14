import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiChatCompletionsCreateParams =
      paths['/ai/chat/completions']['post']['requestBody']['content']['application/json'];

    type AiChatCompletionsCreateResponse =
      paths['/ai/chat/completions']['post']['responses']['200']['content']['application/json'];

    class AiChatCompletionsResource {
      create(
        params: AiChatCompletionsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiChatCompletionsCreateResponse>>;
    }
  }
}
