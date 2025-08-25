// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/gather_using_ai',
  operationId: 'callGatherUsingAI',
};

export const tool: Tool = {
  name: 'gather_using_ai_calls_actions',
  description:
    'Gather parameters defined in the request payload using a voice assistant.\n\n You can pass parameters described as a JSON Schema object and the voice assistant will attempt to gather these informations. \n\n**Expected Webhooks (see [callback schema](https://developers.telnyx.com/api/call-control/call-gather-using-ai#callbacks) below):**\n\n- `call.ai_gather.ended`\n- `call.conversation.ended`\n- `call.ai_gather.partial_results` (if `send_partial_results` is set to `true`)\n- `call.ai_gather.message_history_updated` (if `send_message_history_updates` is set to `true`)\n',
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      parameters: {
        type: 'object',
        description:
          'The parameters described as a JSON Schema object that needs to be gathered by the voice assistant. See the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format',
        additionalProperties: true,
      },
      assistant: {
        $ref: '#/$defs/assistant',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.',
      },
      greeting: {
        type: 'string',
        description:
          'Text that will be played when the gathering starts, if none then nothing will be played when the gathering starts. The greeting can be text for any voice or SSML for `AWS.Polly.<voice_id>` voices. There is a 3,000 character limit.',
      },
      interruption_settings: {
        $ref: '#/$defs/interruption_settings',
      },
      language: {
        $ref: '#/$defs/google_transcription_language',
      },
      message_history: {
        type: 'array',
        description:
          'The message history you want the voice assistant to be aware of, this can be useful to keep the context of the conversation, or to pass additional information to the voice assistant.',
        items: {
          type: 'object',
          properties: {
            content: {
              type: 'string',
              description: 'The content of the message',
            },
            role: {
              type: 'string',
              description: 'The role of the message sender',
              enum: ['assistant', 'user'],
            },
          },
        },
      },
      send_message_history_updates: {
        type: 'boolean',
        description:
          'Default is `false`. If set to `true`, the voice assistant will send updates to the message history via the `call.ai_gather.message_history_updated` [callback](https://developers.telnyx.com/api/call-control/call-gather-using-ai#callbacks) in real time as the message history is updated.',
      },
      send_partial_results: {
        type: 'boolean',
        description:
          'Default is `false`. If set to `true`, the voice assistant will send partial results via the `call.ai_gather.partial_results` [callback](https://developers.telnyx.com/api/call-control/call-gather-using-ai#callbacks) in real time as individual fields are gathered. If set to `false`, the voice assistant will only send the final result via the `call.ai_gather.ended` callback.',
      },
      transcription: {
        $ref: '#/$defs/transcription_config',
      },
      user_response_timeout_ms: {
        type: 'integer',
        description:
          'The number of milliseconds to wait for a user response before the voice assistant times out and check if the user is still there.',
      },
      voice: {
        type: 'string',
        description:
          'The voice to be used by the voice assistant. Currently we support ElevenLabs, Telnyx and AWS voices.\n\n **Supported Providers:**\n- **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural voices, which provide more realistic, human-like speech, append `-Neural` to the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html) for compatibility.\n- **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural, Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural, Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)\n- **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g., `ElevenLabs.BaseModel.John`). The `ModelId` part is optional. To use ElevenLabs, you must provide your ElevenLabs API key as an integration secret under `"voice_settings": {"api_key_ref": "<secret_id>"}`. See [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) for details. Check [available voices](https://elevenlabs.io/docs/api-reference/get-voices).\n - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`',
      },
      voice_settings: {
        anyOf: [
          {
            $ref: '#/$defs/eleven_labs_voice_settings',
          },
          {
            $ref: '#/$defs/telnyx_voice_settings',
          },
          {
            $ref: '#/$defs/aws_voice_settings',
          },
        ],
        description: 'The settings associated with the voice selected',
      },
    },
    required: ['call_control_id', 'parameters'],
    $defs: {
      assistant: {
        type: 'object',
        title: 'Assistant',
        description: 'Assistant configuration including choice of LLM, custom instructions, and tools.',
        properties: {
          instructions: {
            type: 'string',
            description: 'The system instructions that the voice assistant uses during the gather command',
          },
          model: {
            type: 'string',
            description: 'The model to be used by the voice assistant.',
          },
          openai_api_key_ref: {
            type: 'string',
            description:
              'This is necessary only if the model selected is from OpenAI. You would pass the `identifier` for an integration secret [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) that refers to your OpenAI API Key. Warning: Free plans are unlikely to work with this integration.',
          },
          tools: {
            type: 'array',
            description: 'The tools that the voice assistant can use.',
            items: {
              anyOf: [
                {
                  type: 'object',
                  title: 'BookAppointmentTool',
                  properties: {
                    book_appointment: {
                      type: 'object',
                      title: 'BookAppointmentToolParams',
                      properties: {
                        api_key_ref: {
                          type: 'string',
                          description:
                            'Reference to an integration secret that contains your Cal.com API key. You would pass the `identifier` for an integration secret [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) that refers to your Cal.com API key.',
                        },
                        event_type_id: {
                          type: 'integer',
                          description:
                            'Event Type ID for which slots are being fetched. [cal.com](https://cal.com/docs/api-reference/v2/bookings/create-a-booking#body-event-type-id)',
                        },
                        attendee_name: {
                          type: 'string',
                          description:
                            "The name of the attendee [cal.com](https://cal.com/docs/api-reference/v2/bookings/create-a-booking#body-attendee-name). If not provided, the assistant will ask for the attendee's name.",
                        },
                        attendee_timezone: {
                          type: 'string',
                          description:
                            "The timezone of the attendee [cal.com](https://cal.com/docs/api-reference/v2/bookings/create-a-booking#body-attendee-timezone). If not provided, the assistant will ask for the attendee's timezone.",
                        },
                      },
                      required: ['api_key_ref', 'event_type_id'],
                    },
                    type: {
                      type: 'string',
                      enum: ['book_appointment'],
                    },
                  },
                  required: ['book_appointment', 'type'],
                },
                {
                  type: 'object',
                  title: 'CheckAvailabilityTool',
                  properties: {
                    check_availability: {
                      type: 'object',
                      title: 'CheckAvailabilityToolParams',
                      properties: {
                        api_key_ref: {
                          type: 'string',
                          description:
                            'Reference to an integration secret that contains your Cal.com API key. You would pass the `identifier` for an integration secret [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) that refers to your Cal.com API key.',
                        },
                        event_type_id: {
                          type: 'integer',
                          description:
                            'Event Type ID for which slots are being fetched. [cal.com](https://cal.com/docs/api-reference/v2/slots/get-available-slots#parameter-event-type-id)',
                        },
                      },
                      required: ['api_key_ref', 'event_type_id'],
                    },
                    type: {
                      type: 'string',
                      enum: ['check_availability'],
                    },
                  },
                  required: ['check_availability', 'type'],
                },
                {
                  $ref: '#/$defs/webhook_tool',
                },
                {
                  $ref: '#/$defs/hangup_tool',
                },
                {
                  $ref: '#/$defs/transfer_tool',
                },
                {
                  $ref: '#/$defs/retrieval_tool',
                },
              ],
            },
          },
        },
      },
      webhook_tool: {
        type: 'object',
        title: 'WebhookTool',
        properties: {
          type: {
            type: 'string',
            enum: ['webhook'],
          },
          webhook: {
            $ref: '#/$defs/inference_embedding_webhook_tool_params',
          },
        },
        required: ['type', 'webhook'],
      },
      inference_embedding_webhook_tool_params: {
        type: 'object',
        title: 'WebhookToolParams',
        properties: {
          description: {
            type: 'string',
            description: 'The description of the tool.',
          },
          name: {
            type: 'string',
            description: 'The name of the tool.',
          },
          url: {
            type: 'string',
            description:
              'The URL of the external tool to be called. This URL is going to be used by the assistant. The URL can be templated like: `https://example.com/api/v1/{id}`, where `{id}` is a placeholder for a value that will be provided by the assistant if `path_parameters` are provided with the `id` attribute.',
          },
          body_parameters: {
            type: 'object',
            description:
              'The body parameters the webhook tool accepts, described as a JSON Schema object. These parameters will be passed to the webhook as the body of the request. See the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format',
            properties: {
              properties: {
                type: 'object',
                description: 'The properties of the body parameters.',
                additionalProperties: true,
              },
              required: {
                type: 'array',
                description: 'The required properties of the body parameters.',
                items: {
                  type: 'string',
                },
              },
              type: {
                type: 'string',
                enum: ['object'],
              },
            },
          },
          headers: {
            type: 'array',
            description: 'The headers to be sent to the external tool.',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                value: {
                  type: 'string',
                  description:
                    'The value of the header. Note that we support mustache templating for the value. For example you can use `Bearer {{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of the integration secret as the bearer token.',
                },
              },
            },
          },
          method: {
            type: 'string',
            description: 'The HTTP method to be used when calling the external tool.',
            enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
          },
          path_parameters: {
            type: 'object',
            description:
              'The path parameters the webhook tool accepts, described as a JSON Schema object. These parameters will be passed to the webhook as the path of the request if the URL contains a placeholder for a value. See the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format',
            properties: {
              properties: {
                type: 'object',
                description: 'The properties of the path parameters.',
                additionalProperties: true,
              },
              required: {
                type: 'array',
                description: 'The required properties of the path parameters.',
                items: {
                  type: 'string',
                },
              },
              type: {
                type: 'string',
                enum: ['object'],
              },
            },
          },
          query_parameters: {
            type: 'object',
            description:
              'The query parameters the webhook tool accepts, described as a JSON Schema object. These parameters will be passed to the webhook as the query of the request. See the [JSON Schema reference](https://json-schema.org/understanding-json-schema) for documentation about the format',
            properties: {
              properties: {
                type: 'object',
                description: 'The properties of the query parameters.',
                additionalProperties: true,
              },
              required: {
                type: 'array',
                description: 'The required properties of the query parameters.',
                items: {
                  type: 'string',
                },
              },
              type: {
                type: 'string',
                enum: ['object'],
              },
            },
          },
        },
        required: ['description', 'name', 'url'],
      },
      hangup_tool: {
        type: 'object',
        title: 'HangupTool',
        properties: {
          hangup: {
            $ref: '#/$defs/hangup_tool_params',
          },
          type: {
            type: 'string',
            enum: ['hangup'],
          },
        },
        required: ['hangup', 'type'],
      },
      hangup_tool_params: {
        type: 'object',
        title: 'HangupToolParams',
        properties: {
          description: {
            type: 'string',
            description: 'The description of the function that will be passed to the assistant.',
          },
        },
      },
      transfer_tool: {
        type: 'object',
        title: 'TransferTool',
        properties: {
          transfer: {
            $ref: '#/$defs/inference_embedding_transfer_tool_params',
          },
          type: {
            type: 'string',
            enum: ['transfer'],
          },
        },
        required: ['transfer', 'type'],
      },
      inference_embedding_transfer_tool_params: {
        type: 'object',
        title: 'TransferToolParams',
        properties: {
          from: {
            type: 'string',
            description: 'Number or SIP URI placing the call.',
          },
          targets: {
            type: 'array',
            description:
              'The different possible targets of the transfer. The assistant will be able to choose one of the targets to transfer the call to.',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'The name of the target.',
                },
                to: {
                  type: 'string',
                  description: 'The destination number or SIP URI of the call.',
                },
              },
            },
          },
          custom_headers: {
            type: 'array',
            description: 'Custom headers to be added to the SIP INVITE for the transfer command.',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                value: {
                  type: 'string',
                  description:
                    'The value of the header. Note that we support mustache templating for the value. For example you can use `{{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of the integration secret.',
                },
              },
            },
          },
        },
        required: ['from', 'targets'],
      },
      retrieval_tool: {
        type: 'object',
        title: 'RetrievalTool',
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
      interruption_settings: {
        type: 'object',
        description: 'Settings for handling user interruptions during assistant speech',
        properties: {
          enable: {
            type: 'boolean',
            description: 'When true, allows users to interrupt the assistant while speaking',
          },
        },
      },
      google_transcription_language: {
        type: 'string',
        title: 'Google transcription engine list of languages',
        description: 'Language to use for speech recognition',
        enum: [
          'af',
          'sq',
          'am',
          'ar',
          'hy',
          'az',
          'eu',
          'bn',
          'bs',
          'bg',
          'my',
          'ca',
          'yue',
          'zh',
          'hr',
          'cs',
          'da',
          'nl',
          'en',
          'et',
          'fil',
          'fi',
          'fr',
          'gl',
          'ka',
          'de',
          'el',
          'gu',
          'iw',
          'hi',
          'hu',
          'is',
          'id',
          'it',
          'ja',
          'jv',
          'kn',
          'kk',
          'km',
          'ko',
          'lo',
          'lv',
          'lt',
          'mk',
          'ms',
          'ml',
          'mr',
          'mn',
          'ne',
          'no',
          'fa',
          'pl',
          'pt',
          'pa',
          'ro',
          'ru',
          'rw',
          'sr',
          'si',
          'sk',
          'sl',
          'ss',
          'st',
          'es',
          'su',
          'sw',
          'sv',
          'ta',
          'te',
          'th',
          'tn',
          'tr',
          'ts',
          'uk',
          'ur',
          'uz',
          've',
          'vi',
          'xh',
          'zu',
        ],
      },
      transcription_config: {
        type: 'object',
        description:
          'The settings associated with speech to text for the voice assistant. This is only relevant if the assistant uses a text-to-text language model. Any assistant using a model with native audio support (e.g. `fixie-ai/ultravox-v0_4`) will ignore this field.',
        properties: {
          model: {
            type: 'string',
            description:
              'The speech to text model to be used by the voice assistant.\n\n- `distil-whisper/distil-large-v2` is lower latency but English-only.\n- `openai/whisper-large-v3-turbo` is multi-lingual with automatic language detection but slightly higher latency.\n- `google` is a multi-lingual option, please describe the language in the `language` field.',
          },
        },
      },
      eleven_labs_voice_settings: {
        type: 'object',
        title: 'ElevenLabs Voice Settings',
        properties: {
          api_key_ref: {
            type: 'string',
            description:
              'The `identifier` for an integration secret [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) that refers to your ElevenLabs API key. Warning: Free plans are unlikely to work with this integration.',
          },
        },
      },
      telnyx_voice_settings: {
        type: 'object',
        title: 'Telnyx Voice Settings',
        properties: {
          voice_speed: {
            type: 'number',
            description:
              'The voice speed to be used for the voice. The voice speed must be between 0.1 and 2.0. Default value is 1.0.',
          },
        },
      },
      aws_voice_settings: {
        type: 'object',
        title: 'AWS Voice Settings',
        additionalProperties: true,
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, ...body } = args as any;
  return asTextContentResult(await client.calls.actions.gatherUsingAI(call_control_id, body));
};

export default { metadata, tool, handler };
