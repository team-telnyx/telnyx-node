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
   * Create a response using Telnyx's OpenAI-compatible Responses API. This endpoint
   * is compatible with the
   * [OpenAI Responses API](https://developers.openai.com/api/reference/responses/overview)
   * and may be used with the OpenAI JS or Python SDK by setting the base URL to
   * `https://api.telnyx.com/v2/ai/openai`.
   *
   * The `conversation` parameter refers to a Telnyx Conversation rather than an
   * OpenAI-hosted conversation object. To persist a thread across turns, first
   * [create a conversation](https://developers.telnyx.com/api-reference/conversations/create-a-conversation)
   * with `POST /ai/conversations`, then pass that conversation's `id` in the
   * Responses request as `conversation`. The endpoint appends the new input,
   * assistant output, reasoning, and tool-call messages to that conversation. Reuse
   * the same `conversation` id on subsequent Responses requests, including
   * tool-result followups, so the model receives the prior context.
   *
   * If `conversation` is omitted, the request is processed without persisting
   * messages to a Telnyx conversation. Use the Conversations API to manage history:
   * [list conversations](https://developers.telnyx.com/api-reference/conversations/list-conversations)
   * (optionally filtered by metadata),
   * [fetch messages](https://developers.telnyx.com/api-reference/conversations/get-conversation-messages)
   * for a conversation, and optionally
   * [add messages](https://developers.telnyx.com/api-reference/conversations/create-message)
   * outside the Responses flow.
   *
   * You can attach arbitrary metadata when creating a conversation (for example to
   * tag the conversation's source, channel, or user) and later filter by it when
   * listing conversations.
   *
   * @example
   * ```ts
   * const response = await client.ai.openai.createResponse({
   *   conversation: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   input: {
   *     '0': {
   *       role: 'user',
   *       content: [
   *         { type: 'input_text', text: 'Hello, world!' },
   *       ],
   *     },
   *   },
   *   instructions: 'You are a friendly chatbot.',
   *   model: 'zai-org/GLM-5.1-FP8',
   *   stream: true,
   * });
   * ```
   */
  createResponse(
    body: OpenAICreateResponseParams,
    options?: RequestOptions,
  ): APIPromise<OpenAICreateResponseResponse> {
    return this._client.post('/ai/openai/responses', { body, ...options });
  }

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

export type OpenAICreateResponseResponse = { [key: string]: unknown };

export interface OpenAIListModelsResponse {
  data: Array<AIAPI.ModelMetadata>;

  object?: string;
}

export interface OpenAICreateResponseParams {
  /**
   * Optional Telnyx Conversation ID from `POST /ai/conversations`. When provided,
   * Telnyx stores this turn on that conversation and uses the conversation's prior
   * messages as context. Reuse the same ID for subsequent turns and tool-result
   * followups. Omit it for a non-persisted, stateless response.
   */
  conversation?: string;

  /**
   * The input items for this turn, using the OpenAI Responses API input format.
   */
  input?: { [key: string]: unknown };

  /**
   * Optional system/developer instructions for the model. When used with a persisted
   * `conversation`, send these on the first request that creates the thread;
   * subsequent turns can rely on the stored history.
   */
  instructions?: string;

  /**
   * Model identifier to use for the response, for example `zai-org/GLM-5.1-FP8` or
   * another model available from the Telnyx OpenAI-compatible models endpoint.
   */
  model?: string;

  /**
   * Set to `true` to stream Server-Sent Events, matching OpenAI's Responses
   * streaming format.
   */
  stream?: boolean;

  [k: string]: unknown;
}

OpenAI.Embeddings = Embeddings;
OpenAI.Chat = Chat;

export declare namespace OpenAI {
  export {
    type OpenAICreateResponseResponse as OpenAICreateResponseResponse,
    type OpenAIListModelsResponse as OpenAIListModelsResponse,
    type OpenAICreateResponseParams as OpenAICreateResponseParams,
  };

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
