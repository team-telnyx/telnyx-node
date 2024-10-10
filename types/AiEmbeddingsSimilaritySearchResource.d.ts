import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiEmbeddingsSimilaritySearchCreateParams =
      paths['/ai/embeddings/similarity-search']['post']['requestBody']['content']['application/json'];

    type AiEmbeddingsSimilaritySearchCreateResponse =
      paths['/ai/embeddings/similarity-search']['post']['responses']['200']['content']['application/json'];

    class AiEmbeddingsSimilaritySearchResource {
      create(
        params: AiEmbeddingsSimilaritySearchCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.AiEmbeddingsSimilaritySearchCreateResponse>
      >;
    }
  }
}
