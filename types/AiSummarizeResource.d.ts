import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiSummarizeCreateParams =
      paths['/ai/summarize']['post']['requestBody']['content']['application/json'];

    type AiSummarizeCreateResponse =
      paths['/ai/summarize']['post']['responses']['200']['content']['application/json'];

    class AiSummarizeResource {
      create(
        params: AiSummarizeCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiSummarizeCreateResponse>>;
    }
  }
}
