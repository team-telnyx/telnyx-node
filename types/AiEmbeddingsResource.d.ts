import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiEmbeddingsRetrieveId =
      paths['/ai/embeddings/{task_id}']['get']['parameters']['path']['task_id'];

    type AiEmbeddingsRetrieveParams =
      paths['/ai/embeddings/{task_id}']['get']['parameters']['query'];

    type AiEmbeddingsRetrieveResponse =
      paths['/ai/embeddings/{task_id}']['get']['responses']['200']['content']['application/json'];

    type AiEmbeddingsListParams =
      paths['/ai/embeddings']['get']['parameters']['query'];

    type AiEmbeddingsListResponse =
      paths['/ai/embeddings']['get']['responses']['200']['content']['application/json'];

    type AiEmbeddingsCreateParams =
      paths['/ai/embeddings']['post']['requestBody']['content']['application/json'];

    type AiEmbeddingsCreateResponse =
      paths['/ai/embeddings']['post']['responses']['200']['content']['application/json'];

    class AiEmbeddingsResource {
      retrieve(
        id: AiEmbeddingsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiEmbeddingsRetrieveResponse>>;

      list(
        params?: AiEmbeddingsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiEmbeddingsListResponse>>;

      create(
        params: AiEmbeddingsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiEmbeddingsCreateResponse>>;
    }
  }
}
