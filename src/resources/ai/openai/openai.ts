// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AIAPI from '../ai';
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
   * Lists every model currently available to your account on Telnyx Inference,
   * including SOTA open-source LLMs hosted on Telnyx GPUs (for example
   * `moonshotai/Kimi-K2.6`, `zai-org/GLM-5.1-FP8`, and `MiniMaxAI/MiniMax-M2.7`),
   * embedding models, and any fine-tuned models you have created.
   *
   * Each entry is a `ModelMetadata` object describing the model id, owner, task,
   * context length, supported languages, billing tier, pricing per 1M tokens,
   * deployment regions, and whether the model supports vision or fine-tuning. Use
   * this endpoint to discover model ids you can pass to
   * `POST /v2/ai/openai/chat/completions`.
   *
   * Model ids follow the `{organization}/{model_name}` convention from Hugging Face
   * (for example `moonshotai/Kimi-K2.6`). This endpoint is OpenAI-compatible:
   * clients pointed at `https://api.telnyx.com/v2/ai/openai` can call
   * `client.models.list()` to retrieve the same payload.
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
  data: Array<AIAPI.ModelMetadata>;

  object?: string;
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
