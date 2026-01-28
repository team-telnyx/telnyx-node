// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Chat extends APIResource {
  /**
   * Chat with a language model. This endpoint is consistent with the
   * [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat)
   * and may be used with the OpenAI JS or Python SDK.
   *
   * @example
   * ```ts
   * const response = await client.ai.chat.createCompletion({
   *   messages: [
   *     {
   *       role: 'system',
   *       content: 'You are a friendly chatbot.',
   *     },
   *     { role: 'user', content: 'Hello, world!' },
   *   ],
   * });
   * ```
   */
  createCompletion(
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    return this._client.post('/ai/chat/completions', { body, ...options });
  }
}

export interface BucketIDs {
  /**
   * List of
   * [embedded storage buckets](https://developers.telnyx.com/api-reference/embeddings/embed-documents)
   * to use for retrieval-augmented generation.
   */
  bucket_ids: Array<string>;

  /**
   * The maximum number of results to retrieve as context for the language model.
   */
  max_num_results?: number;
}

export type ChatCreateCompletionResponse = { [key: string]: unknown };

export interface ChatCreateCompletionParams {
  /**
   * A list of the previous chat messages for context.
   */
  messages: Array<ChatCreateCompletionParams.Message>;

  /**
   * If you are using an external inference provider like xAI or OpenAI, this field
   * allows you to pass along a reference to your API key. After creating an
   * [integration secret](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * for you API key, pass the secret's `identifier` in this field.
   */
  api_key_ref?: string;

  /**
   * This is used with `use_beam_search` to determine how many candidate beams to
   * explore.
   */
  best_of?: number;

  /**
   * This is used with `use_beam_search`. If `true`, generation stops as soon as
   * there are `best_of` complete candidates; if `false`, a heuristic is applied and
   * the generation stops when is it very unlikely to find better candidates.
   */
  early_stopping?: boolean;

  /**
   * Higher values will penalize the model from repeating the same output tokens.
   */
  frequency_penalty?: number;

  /**
   * If specified, the output will be exactly one of the choices.
   */
  guided_choice?: Array<string>;

  /**
   * Must be a valid JSON schema. If specified, the output will follow the JSON
   * schema.
   */
  guided_json?: { [key: string]: unknown };

  /**
   * If specified, the output will follow the regex pattern.
   */
  guided_regex?: string;

  /**
   * This is used with `use_beam_search` to prefer shorter or longer completions.
   */
  length_penalty?: number;

  /**
   * Whether to return log probabilities of the output tokens or not. If true,
   * returns the log probabilities of each output token returned in the `content` of
   * `message`.
   */
  logprobs?: boolean;

  /**
   * Maximum number of completion tokens the model should generate.
   */
  max_tokens?: number;

  /**
   * This is an alternative to `top_p` that
   * [many prefer](https://github.com/huggingface/transformers/issues/27670). Must be
   * in [0, 1].
   */
  min_p?: number;

  /**
   * The language model to chat with.
   */
  model?: string;

  /**
   * This will return multiple choices for you instead of a single chat completion.
   */
  n?: number;

  /**
   * Higher values will penalize the model from repeating the same output tokens.
   */
  presence_penalty?: number;

  /**
   * Use this is you want to guarantee a JSON output without defining a schema. For
   * control over the schema, use `guided_json`.
   */
  response_format?: ChatCreateCompletionParams.ResponseFormat;

  /**
   * Whether or not to stream data-only server-sent events as they become available.
   */
  stream?: boolean;

  /**
   * Adjusts the "creativity" of the model. Lower values make the model more
   * deterministic and repetitive, while higher values make the model more random and
   * creative.
   */
  temperature?: number;

  tool_choice?: 'none' | 'auto' | 'required';

  /**
   * The `function` tool type follows the same schema as the
   * [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat).
   * The `retrieval` tool type is unique to Telnyx. You may pass a list of
   * [embedded storage buckets](https://developers.telnyx.com/api-reference/embeddings/embed-documents)
   * for retrieval-augmented generation.
   */
  tools?: Array<ChatCreateCompletionParams.Function | ChatCreateCompletionParams.Retrieval>;

  /**
   * This is used with `logprobs`. An integer between 0 and 20 specifying the number
   * of most likely tokens to return at each token position, each with an associated
   * log probability.
   */
  top_logprobs?: number;

  /**
   * An alternative or complement to `temperature`. This adjusts how many of the top
   * possibilities to consider.
   */
  top_p?: number;

  /**
   * Setting this to `true` will allow the model to
   * [explore more completion options](https://huggingface.co/blog/how-to-generate#beam-search).
   * This is not supported by OpenAI.
   */
  use_beam_search?: boolean;
}

export namespace ChatCreateCompletionParams {
  export interface Message {
    content: string | Array<Message.TextAndImageArray>;

    role: 'system' | 'user' | 'assistant' | 'tool';
  }

  export namespace Message {
    export interface TextAndImageArray {
      type: 'text' | 'image_url';

      image_url?: string;

      text?: string;
    }
  }

  /**
   * Use this is you want to guarantee a JSON output without defining a schema. For
   * control over the schema, use `guided_json`.
   */
  export interface ResponseFormat {
    type: 'text' | 'json_object';
  }

  export interface Function {
    function: Function.Function;

    type: 'function';
  }

  export namespace Function {
    export interface Function {
      name: string;

      description?: string;

      parameters?: { [key: string]: unknown };
    }
  }

  export interface Retrieval {
    retrieval: ChatAPI.BucketIDs;

    type: 'retrieval';
  }
}

export declare namespace Chat {
  export {
    type BucketIDs as BucketIDs,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
