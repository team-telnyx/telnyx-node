// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * Creates an embedding vector representing the input text. This endpoint is
   * compatible with the
   * [OpenAI Embeddings API](https://platform.openai.com/docs/api-reference/embeddings)
   * and may be used with the OpenAI JS or Python SDK by setting the base URL to
   * `https://api.telnyx.com/v2/ai/openai`.
   *
   * @example
   * ```ts
   * const embedding = await client.ai.openai.embeddings.create({
   *   input: 'The quick brown fox jumps over the lazy dog',
   *   model: 'thenlper/gte-large',
   * });
   * ```
   */
  create(body: EmbeddingCreateParams, options?: RequestOptions): APIPromise<EmbeddingCreateResponse> {
    return this._client.post('/ai/openai/embeddings', { body, ...options });
  }

  /**
   * Returns a list of available embedding models. This endpoint is compatible with
   * the OpenAI Models API format.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.openai.embeddings.listModels();
   * ```
   */
  listModels(options?: RequestOptions): APIPromise<EmbeddingListModelsResponse> {
    return this._client.get('/ai/openai/embeddings/models', options);
  }
}

export interface EmbeddingCreateResponse {
  /**
   * List of embedding objects
   */
  data: Array<EmbeddingCreateResponse.Data>;

  /**
   * The model used for embedding
   */
  model: string;

  /**
   * The object type, always 'list'
   */
  object: string;

  usage: EmbeddingCreateResponse.Usage;
}

export namespace EmbeddingCreateResponse {
  export interface Data {
    /**
     * The embedding vector
     */
    embedding: Array<number>;

    /**
     * The index of the embedding in the list of embeddings
     */
    index: number;

    /**
     * The object type, always 'embedding'
     */
    object: string;
  }

  export interface Usage {
    /**
     * Number of tokens in the input
     */
    prompt_tokens: number;

    /**
     * Total number of tokens used
     */
    total_tokens: number;
  }
}

export interface EmbeddingListModelsResponse {
  /**
   * List of available embedding models
   */
  data: Array<EmbeddingListModelsResponse.Data>;

  /**
   * The object type, always 'list'
   */
  object: string;
}

export namespace EmbeddingListModelsResponse {
  export interface Data {
    /**
     * The model identifier
     */
    id: string;

    /**
     * Unix timestamp of when the model was created
     */
    created: number;

    /**
     * The object type, always 'model'
     */
    object: string;

    /**
     * The organization that owns the model
     */
    owned_by: string;
  }
}

export interface EmbeddingCreateParams {
  /**
   * Input text to embed. Can be a string or array of strings.
   */
  input: string | Array<string>;

  /**
   * ID of the model to use. Use the List embedding models endpoint to see available
   * models.
   */
  model: string;

  /**
   * The number of dimensions the resulting output embeddings should have. Only
   * supported in some models.
   */
  dimensions?: number;

  /**
   * The format to return the embeddings in.
   */
  encoding_format?: 'float' | 'base64';

  /**
   * A unique identifier representing your end-user for monitoring and abuse
   * detection.
   */
  user?: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingCreateResponse as EmbeddingCreateResponse,
    type EmbeddingListModelsResponse as EmbeddingListModelsResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
  };
}
