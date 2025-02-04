import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AiEmbeddingsBucketsListParams =
      paths['/ai/embeddings/buckets']['get']['parameters']['query'];

    type AiEmbeddingsBucketsListResponse =
      paths['/ai/embeddings/buckets']['get']['responses']['200']['content']['application/json'];

    type AiEmbeddingsBucketsRetrieveId =
      paths['/ai/embeddings/buckets/{bucket_name}']['get']['parameters']['path']['bucket_name'];

    type AiEmbeddingsBucketsRetrieveParams =
      paths['/ai/embeddings/buckets/{bucket_name}']['get']['parameters']['query'];

    type AiEmbeddingsBucketsRetrieveResponse =
      paths['/ai/embeddings/buckets/{bucket_name}']['get']['responses']['200']['content']['application/json'];

    type AiEmbeddingsBucketsDelId =
      paths['/ai/embeddings/buckets/{bucket_name}']['delete']['parameters']['path']['bucket_name'];

    type AiEmbeddingsBucketsDelParams =
      paths['/ai/embeddings/buckets/{bucket_name}']['delete']['parameters']['query'];

    type AiEmbeddingsBucketsDelResponse =
      paths['/ai/embeddings/buckets/{bucket_name}']['delete']['responses']['200']['content'];

    class AiEmbeddingsBucketsResource {
      list(
        params?: AiEmbeddingsBucketsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiEmbeddingsBucketsListResponse>>;

      retrieve(
        id: AiEmbeddingsBucketsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiEmbeddingsBucketsRetrieveResponse>>;

      del(
        id: AiEmbeddingsBucketsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AiEmbeddingsBucketsDelResponse>>;
    }
  }
}
