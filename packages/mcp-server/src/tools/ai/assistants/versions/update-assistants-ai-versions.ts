// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.assistants.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/assistants/{assistant_id}/versions/{version_id}',
  operationId: 'update_assistant_version_public_assistants__assistant_id__versions__version_id__post',
};

export const tool: Tool = {
  name: 'update_assistants_ai_versions',
  description: 'Updates the configuration of a specific assistant version. Can not update main version',
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      version_id: {
        type: 'string',
        title: 'Version Id',
      },
      description: {
        type: 'string',
      },
      dynamic_variables: {
        type: 'object',
        description: 'Map of dynamic variables and their default values',
        additionalProperties: true,
      },
      dynamic_variables_webhook_url: {
        type: 'string',
        description:
          'If the dynamic_variables_webhook_url is set for the assistant, we will send a request at the start of the conversation. See our [guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables) for more information.',
      },
      enabled_features: {
        type: 'array',
        items: {
          $ref: '#/$defs/enabled_features',
        },
      },
      greeting: {
        type: 'string',
        description:
          'Text that the assistant will use to start the conversation. This may be templated with [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)',
      },
      insight_settings: {
        $ref: '#/$defs/insight_settings',
      },
      instructions: {
        type: 'string',
        description:
          'System instructions for the assistant. These may be templated with [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)',
      },
      llm_api_key_ref: {
        type: 'string',
        description:
          "This is only needed when using third-party inference providers. The `identifier` for an integration secret [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) that refers to your LLM provider's API key. Warning: Free plans are unlikely to work with this integration.",
      },
      messaging_settings: {
        $ref: '#/$defs/messaging_settings',
      },
      model: {
        type: 'string',
        description:
          'ID of the model to use. You can use the [Get models API](https://developers.telnyx.com/api/inference/inference-embedding/get-models-public-models-get) to see all of your available models,',
      },
      name: {
        type: 'string',
      },
      privacy_settings: {
        $ref: '#/$defs/privacy_settings',
      },
      telephony_settings: {
        $ref: '#/$defs/telephony_settings',
      },
      tools: {
        type: 'array',
        description:
          'The tools that the assistant can use. These may be templated with [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)',
        items: {
          $ref: '#/$defs/assistant_tool',
        },
      },
      transcription: {
        $ref: '#/$defs/transcription_settings',
      },
      voice_settings: {
        $ref: '#/$defs/voice_settings',
      },
    },
    required: ['assistant_id', 'version_id'],
    $defs: {
      enabled_features: {
        type: 'string',
        description:
          'If `telephony` is enabled, the assistant will be able to make and receive calls. If `messaging` is enabled, the assistant will be able to send and receive messages.',
        enum: ['telephony', 'messaging'],
      },
      insight_settings: {
        type: 'object',
        properties: {
          insight_group_id: {
            type: 'string',
            description:
              "Reference to an Insight Group. Insights in this group will be run automatically for all the assistant's conversations.",
          },
        },
      },
      messaging_settings: {
        type: 'object',
        properties: {
          default_messaging_profile_id: {
            type: 'string',
            description:
              'Default Messaging Profile used for messaging exchanges with your assistant. This will be created automatically on assistant creation.',
          },
          delivery_status_webhook_url: {
            type: 'string',
            description:
              'The URL where webhooks related to delivery statused for assistant messages will be sent.',
          },
        },
      },
      privacy_settings: {
        type: 'object',
        properties: {
          data_retention: {
            type: 'boolean',
            description:
              'If true, conversation history and insights will be stored. If false, they will not be stored. This in‑tool toggle governs solely the retention of conversation history and insights via the AI assistant. It has no effect on any separate recording, transcription, or storage configuration that you have set at the account, number, or application level. All such external settings remain in force regardless of your selection here.',
          },
        },
      },
      telephony_settings: {
        type: 'object',
        title: 'TelephonySettings',
        properties: {
          default_texml_app_id: {
            type: 'string',
            description:
              'Default Texml App used for voice calls with your assistant. This will be created automatically on assistant creation.',
          },
          supports_unauthenticated_web_calls: {
            type: 'boolean',
            description:
              'When enabled, allows users to interact with your AI assistant directly from your website without requiring authentication. This is required for FE widgets that work with assistants that have telephony enabled.',
          },
        },
      },
      assistant_tool: {
        anyOf: [
          {
            $ref: '#/$defs/webhook_tool',
          },
          {
            $ref: '#/$defs/retrieval_tool',
          },
          {
            type: 'object',
            title: 'HandoffTool',
            description:
              'The handoff tool allows the assistant to hand off control of the conversation to another AI assistant. By default, this will happen transparently to the end user.',
            properties: {
              handoff: {
                type: 'object',
                title: 'HandoffToolParams',
                properties: {
                  ai_assistants: {
                    type: 'array',
                    description: 'List of possible assistants that can receive a handoff.',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          description: 'The ID of the assistant to hand off to.',
                        },
                        name: {
                          type: 'string',
                          description: 'Helpful name for giving context on when to handoff to the assistant.',
                        },
                      },
                      required: ['id', 'name'],
                    },
                  },
                  voice_mode: {
                    type: 'string',
                    description:
                      'With the unified voice mode all assistants share the same voice, making the handoff transparent to the user. With the distinct voice mode all assistants retain their voice configuration, providing the experience of a conference call with a team of assistants.',
                    enum: ['unified', 'distinct'],
                  },
                },
                required: ['ai_assistants'],
              },
              type: {
                type: 'string',
                enum: ['handoff'],
              },
            },
            required: ['handoff', 'type'],
          },
          {
            $ref: '#/$defs/hangup_tool',
          },
          {
            $ref: '#/$defs/transfer_tool',
          },
          {
            type: 'object',
            title: 'SIPReferTool',
            properties: {
              refer: {
                type: 'object',
                title: 'SIPReferToolParams',
                properties: {
                  targets: {
                    type: 'array',
                    description:
                      'The different possible targets of the SIP refer. The assistant will be able to choose one of the targets to refer the call to.',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          description: 'The name of the target.',
                        },
                        sip_address: {
                          type: 'string',
                          description: 'The SIP URI to which the call will be referred.',
                        },
                        sip_auth_password: {
                          type: 'string',
                          description: 'SIP Authentication password used for SIP challenges.',
                        },
                        sip_auth_username: {
                          type: 'string',
                          description: 'SIP Authentication username used for SIP challenges.',
                        },
                      },
                      required: ['name', 'sip_address'],
                    },
                  },
                  custom_headers: {
                    type: 'array',
                    description: 'Custom headers to be added to the SIP REFER.',
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
                  sip_headers: {
                    type: 'array',
                    description:
                      'SIP headers to be added to the SIP REFER. Currently only User-to-User and Diversion headers are supported.',
                    items: {
                      type: 'object',
                      properties: {
                        name: {
                          type: 'string',
                          enum: ['User-to-User', 'Diversion'],
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
                required: ['targets'],
              },
              type: {
                type: 'string',
                enum: ['refer'],
              },
            },
            required: ['refer', 'type'],
          },
          {
            type: 'object',
            title: 'DTMFTool',
            properties: {
              send_dtmf: {
                type: 'object',
                additionalProperties: true,
              },
              type: {
                type: 'string',
                enum: ['send_dtmf'],
              },
            },
            required: ['send_dtmf', 'type'],
          },
        ],
        description:
          'The handoff tool allows the assistant to hand off control of the conversation to another AI assistant. By default, this will happen transparently to the end user.',
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
                    'The value of the header. Note that we support mustache templating for the value. For example you can use `Bearer {{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of the integration secret as the bearer token. [Telnyx signature headers](https://developers.telnyx.com/docs/voice/programmable-voice/voice-api-webhooks) will be automatically added to the request.',
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
          warm_transfer_instructions: {
            type: 'string',
            description:
              'Natural language instructions for your agent for how to provide context for the transfer recipient.',
          },
        },
        required: ['from', 'targets'],
      },
      transcription_settings: {
        type: 'object',
        properties: {
          language: {
            type: 'string',
            description:
              'The language of the audio to be transcribed. If not set, of if set to `auto`, the model will automatically detect the language.',
          },
          model: {
            type: 'string',
            description:
              'The speech to text model to be used by the voice assistant. All the deepgram models are run on-premise.\n\n- `deepgram/flux` is optimized for turn-taking but is English-only.\n- `deepgram/nova-3` is multi-lingual with automatic language detection but slightly higher latency.',
            enum: [
              'deepgram/flux',
              'deepgram/nova-3',
              'deepgram/nova-2',
              'azure/fast',
              'distil-whisper/distil-large-v2',
              'openai/whisper-large-v3-turbo',
            ],
          },
          region: {
            type: 'string',
            title: 'Region',
            description:
              'Region on third party cloud providers (currently Azure) if using one of their models',
          },
          settings: {
            type: 'object',
            title: 'TranscriptionSettingsConfig',
            properties: {
              eot_threshold: {
                type: 'number',
                title: 'Eot Threshold',
                description:
                  'Available only for deepgram/flux. Confidence required to trigger an end of turn. Higher values = more reliable turn detection but slightly increased latency.',
              },
              eot_timeout_ms: {
                type: 'integer',
                title: 'Eot Timeout Ms',
                description:
                  'Available only for deepgram/flux. Maximum milliseconds of silence before forcing an end of turn, regardless of confidence.',
              },
              numerals: {
                type: 'boolean',
                title: 'Numerals',
              },
              smart_format: {
                type: 'boolean',
                title: 'Smart Format',
              },
            },
          },
        },
      },
      voice_settings: {
        type: 'object',
        properties: {
          voice: {
            type: 'string',
            description:
              'The voice to be used by the voice assistant. Check the full list of [available voices](https://developers.telnyx.com/api/call-control/list-text-to-speech-voices) via our voices API.\nTo use ElevenLabs, you must reference your ElevenLabs API key as an integration secret under the `api_key_ref` field. See [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) for details. For Telnyx voices, use `Telnyx.<model_id>.<voice_id>` (e.g. Telnyx.KokoroTTS.af_heart)',
          },
          api_key_ref: {
            type: 'string',
            description:
              'The `identifier` for an integration secret [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) that refers to your ElevenLabs API key. Warning: Free plans are unlikely to work with this integration.',
          },
          background_audio: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description: 'Select from predefined media options.',
                    enum: ['predefined_media'],
                  },
                  value: {
                    type: 'string',
                    description: 'The predefined media to use. `silence` disables background audio.',
                    enum: ['silence', 'office'],
                  },
                },
                required: ['type', 'value'],
              },
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description: 'Provide a direct URL to an MP3 file. The audio will loop during the call.',
                    enum: ['media_url'],
                  },
                  value: {
                    type: 'string',
                    description: 'HTTPS URL to an MP3 file.',
                  },
                },
                required: ['type', 'value'],
              },
              {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description:
                      'Reference a previously uploaded media by its name from Telnyx Media Storage.',
                    enum: ['media_name'],
                  },
                  value: {
                    type: 'string',
                    description:
                      'The `name` of a media asset created via [Media Storage API](https://developers.telnyx.com/api/media-storage/create-media-storage). The audio will loop during the call.',
                  },
                },
                required: ['type', 'value'],
              },
            ],
            description:
              'Optional background audio to play on the call. Use a predefined media bed, or supply a looped MP3 URL. If a media URL is chosen in the portal, customers can preview it before saving.',
          },
          voice_speed: {
            type: 'number',
            description:
              'The speed of the voice in the range [0.25, 2.0]. 1.0 is deafult speed. Larger numbers make the voice faster, smaller numbers make it slower. This is only applicable for Telnyx Natural voices.',
          },
        },
        required: ['voice'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  return asTextContentResult(await client.ai.assistants.versions.update(version_id, body));
};

export default { metadata, tool, handler };
