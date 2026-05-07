// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCreateCompletionParams, ChatCreateCompletionResponse } from './chat';
import * as EmbeddingsAPI from './embeddings';
import {
  EmbeddingCreateEmbeddingsParams,
  EmbeddingCreateEmbeddingsResponse,
  EmbeddingListEmbeddingModelsResponse,
  Embeddings,
} from './embeddings';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class OpenAI extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);

  /**
   * This endpoint returns a list of Open Source and OpenAI models that are available
   * for use. <br /><br /> **Note**: Model `id`'s will be in the form
   * `{source}/{model_name}`. For example `openai/gpt-4` or
   * `mistralai/Mistral-7B-Instruct-v0.1` consistent with HuggingFace naming
   * conventions.
   *
   * @example
   * ```ts
   * const response = await client.ai.openai.listModels();
   * ```
   */
  listModels(options?: RequestOptions): APIPromise<OpenAIListModelsResponse> {
    return this._client.get('/ai/openai/models', options);
  }
}

export interface OpenAIListModelsResponse {
  data: Array<OpenAIListModelsResponse.Data>;

  object?: string;
}

export namespace OpenAIListModelsResponse {
  export interface Data {
    id: string;

    created: number;

    owned_by: string;

    object?: string;
  }
}

OpenAI.Embeddings = Embeddings;
OpenAI.Chat = Chat;

export declare namespace OpenAI {
  export { type OpenAIListModelsResponse as OpenAIListModelsResponse };

  export {
    Embeddings as Embeddings,
    type EmbeddingCreateEmbeddingsResponse as EmbeddingCreateEmbeddingsResponse,
    type EmbeddingListEmbeddingModelsResponse as EmbeddingListEmbeddingModelsResponse,
    type EmbeddingCreateEmbeddingsParams as EmbeddingCreateEmbeddingsParams,
  };

  export {
    Chat as Chat,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
