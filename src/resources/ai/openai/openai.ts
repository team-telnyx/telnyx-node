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
   *   input: [
   *     {
   *       role: 'user',
   *       content: [
   *         { type: 'input_text', text: 'Hello, world!' },
   *       ],
   *     },
   *   ],
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
  data: Array<OpenAIListModelsResponse.Data>;

  object?: string;
}

export namespace OpenAIListModelsResponse {
  /**
   * Metadata for a model available on Telnyx Inference. Returned by
   * `GET /v2/ai/openai/models` (and the deprecated `GET /v2/ai/models`). Open-source
   * models live under their Hugging Face organization (e.g. `moonshotai/Kimi-K2.6`,
   * `zai-org/GLM-5.1-FP8`, `MiniMaxAI/MiniMax-M2.7`); fine-tuned models are owned by
   * the Telnyx organization that trained them.
   */
  export interface Data {
    /**
     * Model identifier. For open-source models, follows the
     * `{organization}/{model_name}` convention from Hugging Face (e.g.
     * `moonshotai/Kimi-K2.6`).
     */
    id: string;

    /**
     * Maximum total tokens (prompt + completion) supported by the model in a single
     * request.
     */
    context_length: number;

    /**
     * Timestamp at which the model was registered on Telnyx Inference (ISO 8601).
     */
    created: string;

    /**
     * ISO language codes the model supports (e.g. `en`, `es`).
     */
    languages: Array<string>;

    /**
     * License the model is distributed under, e.g. `Apache 2.0`, `MIT`,
     * `Llama 3 Community License`.
     */
    license: string;

    /**
     * Organization that originally published the model, matching the prefix of `id`
     * for open-source models.
     */
    organization: string;

    /**
     * Owner of the model. `Telnyx` for Telnyx-hosted open-source models, the upstream
     * provider name for proxied models, or the Telnyx organization id for fine-tuned
     * models.
     */
    owned_by: string;

    /**
     * Total parameter count of the model.
     */
    parameters: number;

    /**
     * Billing tier the model belongs to. Used together with `pricing` to determine
     * cost per 1M tokens.
     */
    tier: 'small' | 'medium' | 'large' | 'unlisted';

    /**
     * Base model the fine-tuned model was trained from. Only set for fine-tuned
     * models.
     */
    base_model?: string | null;

    /**
     * Short, human-readable summary of what the model is best suited for.
     */
    description?: string | null;

    /**
     * Whether the model can be used as a base for a fine-tuning job via
     * `POST /v2/ai/fine_tuning/jobs`.
     */
    is_fine_tunable?: boolean;

    /**
     * Whether the model accepts image inputs in chat completions (multimodal vision
     * support).
     */
    is_vision_supported?: boolean;

    /**
     * Maximum number of completion (output) tokens the model will generate per
     * request. `null` if unconstrained beyond `context_length`.
     */
    max_completion_tokens?: number | null;

    /**
     * Object type. Always `model`.
     */
    object?: string;

    /**
     * Human-readable parameter count, e.g. `1.0T`, `753.9B`, `8B`.
     */
    parameters_str?: string | null;

    /**
     * Mapping of token kind to price, as strings to preserve precision. Typical keys
     * are `prompt`, `cached_prompt`, and `completion`. When pricing is available the
     * block also includes `currency` (ISO 4217 code matching the account's configured
     * billing currency) and `unit` (the denomination the prices are quoted in,
     * currently always `1M_tokens` for token-priced models).
     */
    pricing?: { [key: string]: string };

    /**
     * Whether Telnyx currently recommends this model as the LLM powering a Telnyx AI
     * Assistant.
     */
    recommended_for_assistants?: boolean;

    /**
     * Public region names where the model is currently deployed (e.g. `us-central-1`,
     * `eu-central-1`).
     */
    regions?: Array<string>;

    /**
     * Primary task the model is intended for, e.g. `text-generation`,
     * `audio-text-to-text`, `feature-extraction` (embeddings).
     */
    task?: string;
  }
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
  input?: unknown;

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
