import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiAssistantsRetrieveId =
      paths['/ai/assistants/{assistant_id}']['get']['parameters']['path']['assistant_id'];

    type AiAssistantsRetrieveResponse =
      paths['/ai/assistants/{assistant_id}']['get']['responses']['200']['content']['application/json'];

    type AiAssistantsListParams =
      paths['/ai/assistants']['get']['parameters']['query'];

    type AiAssistantsListResponse =
      paths['/ai/assistants']['get']['responses']['200']['content']['application/json'];

    type AiAssistantsCreateParams =
      paths['/ai/assistants']['post']['requestBody']['content']['application/json'];

    type AiAssistantsCreateResponse =
      paths['/ai/assistants']['post']['responses']['200']['content']['application/json'];

    type AiAssistantsDelId =
      paths['/ai/assistants/{assistant_id}']['delete']['parameters']['path']['assistant_id'];

    type AiAssistantsDelParams =
      paths['/ai/assistants/{assistant_id}']['delete']['parameters']['query'];

    type AiAssistantsDelResponse =
      paths['/ai/assistants/{assistant_id}']['delete']['responses']['200']['content']['application/json'];

    type AiAssistantsUpdateId =
      paths['/ai/assistants/{assistant_id}']['post']['parameters']['path']['assistant_id'];

    type AiAssistantsUpdateParams =
      paths['/ai/assistants/{assistant_id}']['post']['requestBody']['content']['application/json'];

    type AiAssistantsUpdateResponse =
      paths['/ai/assistants/{assistant_id}']['post']['responses']['200']['content']['application/json'];

    class AiAssistantsResource {
      retrieve(
        id: AiAssistantsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiAssistantsRetrieveResponse>>;

      list(
        params?: AiAssistantsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiAssistantsListResponse>>;

      create(
        params: AiAssistantsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiAssistantsCreateResponse>>;

      del(
        id: AiAssistantsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiAssistantsDelResponse>>;

      update(
        id: AiAssistantsUpdateId,
        params: AiAssistantsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiAssistantsUpdateResponse>>;
    }
  }
}
