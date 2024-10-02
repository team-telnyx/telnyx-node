import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiModelsListParams = paths['/ai/models']['get']['parameters']['query'];

    type AiModelsListResponse =
      paths['/ai/models']['get']['responses']['200']['content']['application/json'];

    class AiModelsResource {
      list(
        params?: AiModelsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiModelsListResponse>>;
    }
  }
}
