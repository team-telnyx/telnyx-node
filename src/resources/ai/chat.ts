// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat';

export class Chat extends APIResource {}

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

export interface ChatCompletionRequest {
  /**
   * A list of the previous chat messages for context.
   */
  messages: Array<ChatCompletionRequest.Message>;

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
   * Whether to enable the thinking/reasoning phase for models that support it (e.g.,
   * QwQ, Qwen3). When set to false, the model will skip the internal reasoning step
   * and respond directly, which can reduce latency. Defaults to true.
   */
  enable_thinking?: boolean;

  /**
   * Higher values will penalize the model from repeating the same output tokens.
   */
  frequency_penalty?: number;

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
   * How strictly `region` is applied. `preferred` (the default when `region` is set)
   * tries that region first and falls back to another when the model cannot be
   * served there, so a request that would have succeeded still succeeds. `strict`
   * pins the request: it is served from that region or it fails with a 422, never
   * redirected to another region. Requires `region`.
   */
  mode?: 'preferred' | 'strict';

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
   * Controls the reasoning effort for models that support it. When set, the model
   * spends more or less compute on internal reasoning before generating its
   * response. Supported values: none, minimal, low, medium, high, xhigh, max. Not
   * all models support all values; unsupported values are rejected with a 400 error.
   * When omitted, reasoning models use their default effort level.
   */
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max';

  /**
   * Optional data-residency region the request should be served from, using the same
   * vocabulary as your account's Data Locality setting. Behavior depends on `mode`.
   * Supported for Telnyx-hosted models only: a request routed to an external
   * provider never passes through Telnyx model routing, so a region cannot be
   * enforced for it. Omit for today's latency-based routing.
   */
  region?: 'USA' | 'EU' | 'AUS' | 'UAE';

  /**
   * Controls the format of the model output. `json_object` guarantees valid JSON
   * output without defining a schema; `json_schema` constrains the output to the
   * JSON schema you supply via the `json_schema` property and is the supported way
   * to get guaranteed structured output on Telnyx-hosted models.
   */
  response_format?:
    | ChatCompletionRequest.ResponseFormatText
    | ChatCompletionRequest.ResponseFormatJsonObject
    | ChatCompletionRequest.ResponseFormatJsonSchemaParam;

  /**
   * If specified, the system will make a best effort to sample deterministically,
   * such that repeated requests with the same `seed` and parameters should return
   * the same result.
   */
  seed?: number;

  /**
   * The service tier to use for this request. Supported values vary by model; use
   * `GET /v2/ai/openai/models` and inspect the model's `service_tiers` field. If
   * omitted, Telnyx-hosted models use `default`.
   */
  service_tier?: string;

  /**
   * Up to 4 sequences where the API will stop generating further tokens. The
   * returned text will not contain the stop sequence.
   */
  stop?: string | Array<string>;

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
  tools?: Array<ChatCompletionRequest.Function | ChatCompletionRequest.Retrieval>;

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

export namespace ChatCompletionRequest {
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
   * Plain text output.
   */
  export interface ResponseFormatText {
    type: 'text';
  }

  /**
   * JSON mode: the model output is valid JSON, without a schema.
   */
  export interface ResponseFormatJsonObject {
    type: 'json_object';
  }

  /**
   * Structured output: the model output is constrained to the JSON schema supplied
   * in `json_schema`.
   */
  export interface ResponseFormatJsonSchemaParam {
    /**
     * The JSON schema configuration, required when `type` is `json_schema`. Matches
     * the
     * [OpenAI structured outputs](https://platform.openai.com/docs/guides/structured-outputs)
     * `json_schema` response format.
     */
    json_schema: ResponseFormatJsonSchemaParam.JsonSchema;

    type: 'json_schema';
  }

  export namespace ResponseFormatJsonSchemaParam {
    /**
     * The JSON schema configuration, required when `type` is `json_schema`. Matches
     * the
     * [OpenAI structured outputs](https://platform.openai.com/docs/guides/structured-outputs)
     * `json_schema` response format.
     */
    export interface JsonSchema {
      /**
       * The name of the response format. Used for clarity only.
       */
      name: string;

      /**
       * A description of what the response format is for, typically used to guide the
       * model.
       */
      description?: string;

      /**
       * The JSON schema the model output must conform to. A valid
       * [JSON Schema](https://json-schema.org) object, e.g. a Pydantic
       * `model_json_schema()` export.
       */
      schema?: { [key: string]: unknown };

      /**
       * Enables strict schema adherence when supported by the model. If the generated
       * output does not match the provided schema, the request fails instead of
       * returning non-conformant output.
       */
      strict?: boolean;
    }
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
  export { type BucketIDs as BucketIDs, type ChatCompletionRequest as ChatCompletionRequest };
}
