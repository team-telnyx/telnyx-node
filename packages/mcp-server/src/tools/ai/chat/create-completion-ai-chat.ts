// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.chat',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/chat/completions',
  operationId: 'chat_public_chat_completions_post',
};

export const tool: Tool = {
  name: 'create_completion_ai_chat',
  description:
    'Chat with a language model. This endpoint is consistent with the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat) and may be used with the OpenAI JS or Python SDK.',
  inputSchema: {
    type: 'object',
    properties: {
      messages: {
        type: 'array',
        description: 'A list of the previous chat messages for context.',
        items: {
          type: 'object',
          title: 'ChatCompletionSystemMessageParam',
          properties: {
            content: {
              anyOf: [
                {
                  type: 'string',
                  title: 'Content String',
                },
                {
                  type: 'array',
                  title: 'Text and Image Array',
                  items: {
                    type: 'object',
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['text', 'image_url'],
                      },
                      image_url: {
                        type: 'string',
                      },
                      text: {
                        type: 'string',
                      },
                    },
                    required: ['type'],
                  },
                },
              ],
            },
            role: {
              type: 'string',
              enum: ['system', 'user', 'assistant', 'tool'],
            },
          },
          required: ['content', 'role'],
        },
      },
      api_key_ref: {
        type: 'string',
        description:
          "If you are using an external inference provider like xAI or OpenAI, this field allows you to pass along a reference to your API key. After creating an [integration secret](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) for you API key, pass the secret's `identifier` in this field.",
      },
      best_of: {
        type: 'integer',
        description: 'This is used with `use_beam_search` to determine how many candidate beams to explore.',
      },
      early_stopping: {
        type: 'boolean',
        description:
          'This is used with `use_beam_search`. If `true`, generation stops as soon as there are `best_of` complete candidates; if `false`, a heuristic is applied and the generation stops when is it very unlikely to find better candidates.',
      },
      frequency_penalty: {
        type: 'number',
        description: 'Higher values will penalize the model from repeating the same output tokens.',
      },
      guided_choice: {
        type: 'array',
        description: 'If specified, the output will be exactly one of the choices.',
        items: {
          type: 'string',
        },
      },
      guided_json: {
        type: 'object',
        description: 'Must be a valid JSON schema. If specified, the output will follow the JSON schema.',
        additionalProperties: true,
      },
      guided_regex: {
        type: 'string',
        description: 'If specified, the output will follow the regex pattern.',
      },
      length_penalty: {
        type: 'number',
        description: 'This is used with `use_beam_search` to prefer shorter or longer completions.',
      },
      logprobs: {
        type: 'boolean',
        description:
          'Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`.',
      },
      max_tokens: {
        type: 'integer',
        description: 'Maximum number of completion tokens the model should generate.',
      },
      min_p: {
        type: 'number',
        description:
          'This is an alternative to `top_p` that [many prefer](https://github.com/huggingface/transformers/issues/27670). Must be in [0, 1].',
      },
      model: {
        type: 'string',
        description: 'The language model to chat with.',
      },
      n: {
        type: 'number',
        description: 'This will return multiple choices for you instead of a single chat completion.',
      },
      presence_penalty: {
        type: 'number',
        description: 'Higher values will penalize the model from repeating the same output tokens.',
      },
      response_format: {
        type: 'object',
        title: 'ChatCompletionResponseFormatParam',
        description:
          'Use this is you want to guarantee a JSON output without defining a schema. For control over the schema, use `guided_json`.',
        properties: {
          type: {
            type: 'string',
            enum: ['text', 'json_object'],
          },
        },
        required: ['type'],
      },
      stream: {
        type: 'boolean',
        description: 'Whether or not to stream data-only server-sent events as they become available.',
      },
      temperature: {
        type: 'number',
        description:
          'Adjusts the "creativity" of the model. Lower values make the model more deterministic and repetitive, while higher values make the model more random and creative.',
      },
      tool_choice: {
        type: 'string',
        enum: ['none', 'auto', 'required'],
      },
      tools: {
        type: 'array',
        description:
          'The `function` tool type follows the same schema as the [OpenAI Chat Completions API](https://platform.openai.com/docs/api-reference/chat). The `retrieval` tool type is unique to Telnyx. You may pass a list of [embedded storage buckets](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding) for retrieval-augmented generation.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Function',
              properties: {
                function: {
                  type: 'object',
                  title: 'FunctionDefinition',
                  properties: {
                    name: {
                      type: 'string',
                    },
                    description: {
                      type: 'string',
                    },
                    parameters: {
                      type: 'object',
                      additionalProperties: true,
                    },
                  },
                  required: ['name'],
                },
                type: {
                  type: 'string',
                  enum: ['function'],
                },
              },
              required: ['function', 'type'],
            },
            {
              type: 'object',
              title: 'Retrieval',
              properties: {
                retrieval: {
                  $ref: '#/$defs/inference_embedding_bucket_ids',
                },
                type: {
                  type: 'string',
                  enum: ['retrieval'],
                },
              },
              required: ['retrieval', 'type'],
            },
          ],
        },
      },
      top_logprobs: {
        type: 'integer',
        description:
          'This is used with `logprobs`. An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability.',
      },
      top_p: {
        type: 'number',
        description:
          'An alternative or complement to `temperature`. This adjusts how many of the top possibilities to consider.',
      },
      use_beam_search: {
        type: 'boolean',
        description:
          'Setting this to `true` will allow the model to [explore more completion options](https://huggingface.co/blog/how-to-generate#beam-search). This is not supported by OpenAI.',
      },
    },
    required: ['messages'],
    $defs: {
      inference_embedding_bucket_ids: {
        type: 'object',
        title: 'BucketIds',
        properties: {
          bucket_ids: {
            type: 'array',
            description:
              'List of [embedded storage buckets](https://developers.telnyx.com/api/inference/inference-embedding/post-embedding) to use for retrieval-augmented generation.',
            items: {
              type: 'string',
            },
          },
          max_num_results: {
            type: 'integer',
            description: 'The maximum number of results to retrieve as context for the language model.',
          },
        },
        required: ['bucket_ids'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.ai.chat.createCompletion(body)) as object);
};

export default { metadata, tool, handler };
