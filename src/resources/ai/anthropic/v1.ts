// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class V1 extends APIResource {
  /**
   * Send a message to a language model using the Anthropic Messages API format. This
   * endpoint is compatible with the
   * [Anthropic Messages API](https://docs.anthropic.com/en/api/messages) and may be
   * used with the Anthropic JS or Python SDK by setting the base URL to
   * `https://api.telnyx.com/v2/ai/anthropic`.
   *
   * The endpoint translates Anthropic-format requests into Telnyx's inference
   * internals, then translates the response back to the Anthropic message shape.
   * Streaming responses use Anthropic SSE event types (`message_start`,
   * `content_block_start`, `content_block_delta`, `content_block_stop`,
   * `message_delta`, `message_stop`).
   *
   * @example
   * ```ts
   * const response = await client.ai.anthropic.v1.messages({
   *   max_tokens: 1024,
   *   messages: [{ role: 'user', content: 'Hello, world!' }],
   *   model: 'zai-org/GLM-5.2',
   *   system: 'You are a friendly chatbot.',
   * });
   * ```
   */
  messages(body: V1MessagesParams, options?: RequestOptions): APIPromise<V1MessagesResponse> {
    return this._client.post('/ai/anthropic/v1/messages', { body, ...options });
  }
}

/**
 * An Anthropic-format message response with `type: "message"`, `role`, `content`,
 * `stop_reason`, `stop_sequence`, and `usage`. When `stream` is true, the response
 * is a text/event-stream of Anthropic SSE events.
 */
export type V1MessagesResponse = { [key: string]: unknown };

export interface V1MessagesParams {
  /**
   * The maximum number of tokens to generate in the response.
   */
  max_tokens: number;

  /**
   * The messages to send to the model, following the
   * [Anthropic Messages API](https://docs.anthropic.com/en/api/messages) format.
   */
  messages: Array<{ [key: string]: unknown }>;

  /**
   * The model to use for generating the response, for example `zai-org/GLM-5.2` or
   * another model available from the Telnyx models endpoint.
   */
  model: string;

  /**
   * If you are using an external inference provider, this field allows you to pass
   * along a reference to your API key. After creating an
   * [integration secret](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * for your API key, pass the secret's `identifier` in this field.
   */
  api_key_ref?: string;

  /**
   * The billing group ID to associate with this request.
   */
  billing_group_id?: string;

  /**
   * Configuration for model fallback behavior when the primary model is unavailable.
   */
  fallback_config?: { [key: string]: unknown };

  /**
   * Maximum number of retries for the request.
   */
  max_retries?: number;

  /**
   * List of MCP (Model Context Protocol) servers to make available to the model.
   */
  mcp_servers?: Array<{ [key: string]: unknown }>;

  /**
   * An object describing metadata about the request.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Service tier for the request.
   */
  service_tier?: string;

  /**
   * Custom sequences that will cause the model to stop generating.
   */
  stop_sequences?: Array<string>;

  /**
   * Whether to stream the response as Anthropic-format Server-Sent Events.
   */
  stream?: boolean;

  /**
   * System prompt. Can be a string or an array of content blocks following the
   * Anthropic API format.
   */
  system?: string | Array<{ [key: string]: unknown }>;

  /**
   * Amount of randomness injected into the response. Ranges from 0 to 1.
   */
  temperature?: number;

  /**
   * Extended thinking configuration for models that support it. Set `type` to
   * `enabled` to turn on extended thinking.
   */
  thinking?: { [key: string]: unknown };

  /**
   * Request timeout in seconds.
   */
  timeout?: number;

  /**
   * Controls how the model uses tools, following the Anthropic API format.
   */
  tool_choice?: { [key: string]: unknown };

  /**
   * Definitions of tools that the model may use, following the Anthropic API format.
   */
  tools?: Array<{ [key: string]: unknown }>;

  /**
   * Top-k sampling parameter. Only sample from the top K options for each subsequent
   * token.
   */
  top_k?: number;

  /**
   * Nucleus sampling parameter. Use temperature or top_p, but not both.
   */
  top_p?: number;

  [k: string]: unknown;
}

export declare namespace V1 {
  export { type V1MessagesResponse as V1MessagesResponse, type V1MessagesParams as V1MessagesParams };
}
