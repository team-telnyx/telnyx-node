// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/answer',
  operationId: 'AnswerCall',
};

export const tool: Tool = {
  name: 'answer_calls_actions',
  description:
    'Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.\n\n**Expected Webhooks:**\n\n- `call.answered`\n- `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set\n\nWhen the `record` parameter is set to `record-from-answer`, the response will include a `recording_id` field.\n',
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      billing_group_id: {
        type: 'string',
        description:
          'Use this field to set the Billing Group ID for the call. Must be a valid and existing Billing Group ID.',
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
      custom_headers: {
        type: 'array',
        description: 'Custom headers to be added to the SIP INVITE response.',
        items: {
          $ref: '#/$defs/custom_sip_header',
        },
      },
      preferred_codecs: {
        type: 'string',
        description:
          'The list of comma-separated codecs in a preferred order for the forked media to be received.',
        enum: ['G722,PCMU,PCMA,G729,OPUS,VP8,H264'],
      },
      record: {
        type: 'string',
        description: 'Start recording automatically after an event. Disabled by default.',
        enum: ['record-from-answer'],
      },
      record_channels: {
        type: 'string',
        description:
          "Defines which channel should be recorded ('single' or 'dual') when `record` is specified.",
        enum: ['single', 'dual'],
      },
      record_custom_file_name: {
        type: 'string',
        description:
          'The custom recording file name to be used instead of the default `call_leg_id`. Telnyx will still add a Unix timestamp suffix.',
      },
      record_format: {
        type: 'string',
        description: "Defines the format of the recording ('wav' or 'mp3') when `record` is specified.",
        enum: ['wav', 'mp3'],
      },
      record_max_length: {
        type: 'integer',
        description:
          'Defines the maximum length for the recording in seconds when `record` is specified. The minimum value is 0. The maximum value is 43200. The default value is 0 (infinite).',
      },
      record_timeout_secs: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected when `record` is specified. The timer only starts when the speech is detected. Please note that call transcription is used to detect silence and the related charge will be applied. The minimum value is 0. The default value is 0 (infinite).',
      },
      record_track: {
        type: 'string',
        description:
          'The audio track to be recorded. Can be either `both`, `inbound` or `outbound`. If only single track is specified (`inbound`, `outbound`), `channels` configuration is ignored and it will be recorded as mono (single channel).',
        enum: ['both', 'inbound', 'outbound'],
      },
      record_trim: {
        type: 'string',
        description:
          'When set to `trim-silence`, silence will be removed from the beginning and end of the recording.',
        enum: ['trim-silence'],
      },
      send_silence_when_idle: {
        type: 'boolean',
        description: 'Generate silence RTP packets when no transmission available.',
      },
      sip_headers: {
        type: 'array',
        description:
          'SIP headers to be added to the SIP INVITE response. Currently only User-to-User header is supported.',
        items: {
          $ref: '#/$defs/sip_header',
        },
      },
      sound_modifications: {
        $ref: '#/$defs/sound_modifications',
      },
      stream_bidirectional_codec: {
        $ref: '#/$defs/stream_bidirectional_codec',
      },
      stream_bidirectional_mode: {
        $ref: '#/$defs/stream_bidirectional_mode',
      },
      stream_bidirectional_target_legs: {
        $ref: '#/$defs/stream_bidirectional_target_legs',
      },
      stream_codec: {
        $ref: '#/$defs/stream_codec',
      },
      stream_track: {
        type: 'string',
        description: 'Specifies which track should be streamed.',
        enum: ['inbound_track', 'outbound_track', 'both_tracks'],
      },
      stream_url: {
        type: 'string',
        description: 'The destination WebSocket address where the stream is going to be delivered.',
      },
      transcription: {
        type: 'boolean',
        description: 'Enable transcription upon call answer. The default value is false.',
      },
      transcription_config: {
        $ref: '#/$defs/transcription_start_request',
      },
      webhook_url: {
        type: 'string',
        description:
          'Use this field to override the URL for which Telnyx will send subsequent webhooks to for this call.',
      },
      webhook_url_method: {
        type: 'string',
        description: 'HTTP request type used for `webhook_url`.',
        enum: ['POST', 'GET'],
      },
    },
    required: ['call_control_id'],
    $defs: {
      custom_sip_header: {
        type: 'object',
        title: 'Custom SIP Header',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the header to add.',
          },
          value: {
            type: 'string',
            description: 'The value of the header.',
          },
        },
        required: ['name', 'value'],
      },
      sip_header: {
        type: 'object',
        title: 'SIP Header',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the header to add.',
            enum: ['User-to-User'],
          },
          value: {
            type: 'string',
            description: 'The value of the header.',
          },
        },
        required: ['name', 'value'],
      },
      sound_modifications: {
        type: 'object',
        title: 'Sound modifications',
        description: 'Use this field to modify sound effects, for example adjust the pitch.',
        properties: {
          octaves: {
            type: 'number',
            description: 'Adjust the pitch in octaves, values should be between -1 and 1, default 0',
          },
          pitch: {
            type: 'number',
            description: 'Set the pitch directly, value should be > 0, default 1 (lower = lower tone)',
          },
          semitone: {
            type: 'number',
            description: 'Adjust the pitch in semitones, values should be between -14 and 14, default 0',
          },
          track: {
            type: 'string',
            description:
              'The track to which the sound modifications will be applied. Accepted values are `inbound` or `outbound`',
          },
        },
      },
      stream_bidirectional_codec: {
        type: 'string',
        title: 'Bidirectional Stream Codec',
        description:
          'Indicates codec for bidirectional streaming RTP payloads. Used only with stream_bidirectional_mode=rtp. Case sensitive.',
        enum: ['PCMU', 'PCMA', 'G722', 'OPUS', 'AMR-WB', 'L16'],
      },
      stream_bidirectional_mode: {
        type: 'string',
        title: 'Bidirectional Stream Mode',
        description: 'Configures method of bidirectional streaming (mp3, rtp).',
        enum: ['mp3', 'rtp'],
      },
      stream_bidirectional_target_legs: {
        type: 'string',
        title: 'Bidirectional Stream Target Legs',
        description: 'Specifies which call legs should receive the bidirectional stream audio.',
        enum: ['both', 'self', 'opposite'],
      },
      stream_codec: {
        type: 'string',
        title: 'Stream Codec',
        description:
          "Specifies the codec to be used for the streamed audio. When set to 'default' or when transcoding is not possible, the codec from the call will be used.",
        enum: ['PCMU', 'PCMA', 'G722', 'OPUS', 'AMR-WB', 'L16', 'default'],
      },
      transcription_start_request: {
        type: 'object',
        title: 'Transcription start request',
        properties: {
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
          transcription_engine: {
            type: 'string',
            description:
              'Engine to use for speech recognition. Legacy values `A` - `Google`, `B` - `Telnyx` are supported for backward compatibility.',
            enum: ['Google', 'Telnyx', 'Deepgram', 'Azure', 'A', 'B'],
          },
          transcription_engine_config: {
            anyOf: [
              {
                $ref: '#/$defs/transcription_engine_google_config',
              },
              {
                $ref: '#/$defs/transcription_engine_telnyx_config',
              },
              {
                type: 'object',
                title: 'Deepgram Nova-2 config',
                properties: {
                  transcription_engine: {
                    type: 'string',
                    enum: ['Deepgram'],
                  },
                  transcription_model: {
                    type: 'string',
                    enum: ['deepgram/nova-2'],
                  },
                  keywords_boosting: {
                    type: 'object',
                    description:
                      'Keywords and their respective intensifiers (boosting values) to improve transcription accuracy for specific words or phrases. The intensifier should be a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.',
                    additionalProperties: true,
                  },
                  language: {
                    type: 'string',
                    title: 'Deepgram nova-2 transcription engine list of languages',
                    description: 'Language to use for speech recognition with nova-2 model',
                    enum: [
                      'bg',
                      'ca',
                      'zh',
                      'zh-CN',
                      'zh-Hans',
                      'zh-TW',
                      'zh-Hant',
                      'zh-HK',
                      'cs',
                      'da',
                      'da-DK',
                      'nl',
                      'en',
                      'en-US',
                      'en-AU',
                      'en-GB',
                      'en-NZ',
                      'en-IN',
                      'et',
                      'fi',
                      'nl-BE',
                      'fr',
                      'fr-CA',
                      'de',
                      'de-CH',
                      'el',
                      'hi',
                      'hu',
                      'id',
                      'it',
                      'ja',
                      'ko',
                      'ko-KR',
                      'lv',
                      'lt',
                      'ms',
                      'no',
                      'pl',
                      'pt',
                      'pt-BR',
                      'pt-PT',
                      'ro',
                      'ru',
                      'sk',
                      'es',
                      'es-419',
                      'sv',
                      'sv-SE',
                      'th',
                      'th-TH',
                      'tr',
                      'uk',
                      'vi',
                      'auto_detect',
                    ],
                  },
                },
                required: ['transcription_engine', 'transcription_model'],
              },
              {
                type: 'object',
                title: 'Deepgram Nova-3 config',
                properties: {
                  transcription_engine: {
                    type: 'string',
                    enum: ['Deepgram'],
                  },
                  transcription_model: {
                    type: 'string',
                    enum: ['deepgram/nova-3'],
                  },
                  keywords_boosting: {
                    type: 'object',
                    description:
                      'Keywords and their respective intensifiers (boosting values) to improve transcription accuracy for specific words or phrases. The intensifier should be a numeric value. Example: `{"snuffleupagus": 5, "systrom": 2, "krieger": 1}`.',
                    additionalProperties: true,
                  },
                  language: {
                    type: 'string',
                    title: 'Deepgram nova-3 transcription engine list of languages',
                    description: 'Language to use for speech recognition with nova-3 model',
                    enum: [
                      'en',
                      'en-US',
                      'en-AU',
                      'en-GB',
                      'en-IN',
                      'en-NZ',
                      'de',
                      'nl',
                      'sv',
                      'sv-SE',
                      'da',
                      'da-DK',
                      'es',
                      'es-419',
                      'fr',
                      'fr-CA',
                      'pt',
                      'pt-BR',
                      'pt-PT',
                      'auto_detect',
                    ],
                  },
                },
                required: ['transcription_engine', 'transcription_model'],
              },
              {
                $ref: '#/$defs/transcription_engine_azure_config',
              },
              {
                $ref: '#/$defs/transcription_engine_a_config',
              },
              {
                $ref: '#/$defs/transcription_engine_b_config',
              },
            ],
          },
          transcription_tracks: {
            type: 'string',
            description:
              'Indicates which leg of the call will be transcribed. Use `inbound` for the leg that requested the transcription, `outbound` for the other leg, and `both` for both legs of the call. Will default to `inbound`.',
          },
        },
      },
      transcription_engine_google_config: {
        type: 'object',
        title: 'Transcription engine Google config',
        properties: {
          enable_speaker_diarization: {
            type: 'boolean',
            description: 'Enables speaker diarization.',
          },
          hints: {
            type: 'array',
            description: 'Hints to improve transcription accuracy.',
            items: {
              type: 'string',
            },
          },
          interim_results: {
            type: 'boolean',
            description:
              'Whether to send also interim results. If set to false, only final results will be sent.',
          },
          language: {
            $ref: '#/$defs/google_transcription_language',
          },
          max_speaker_count: {
            type: 'integer',
            description: 'Defines maximum number of speakers in the conversation.',
          },
          min_speaker_count: {
            type: 'integer',
            description: 'Defines minimum number of speakers in the conversation.',
          },
          model: {
            type: 'string',
            description: 'The model to use for transcription.',
            enum: [
              'latest_long',
              'latest_short',
              'command_and_search',
              'phone_call',
              'video',
              'default',
              'medical_conversation',
              'medical_dictation',
            ],
          },
          profanity_filter: {
            type: 'boolean',
            description: 'Enables profanity_filter.',
          },
          speech_context: {
            type: 'array',
            description: 'Speech context to improve transcription accuracy.',
            items: {
              type: 'object',
              properties: {
                boost: {
                  type: 'number',
                  description: 'Boost factor for the speech context.',
                },
                phrases: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
            },
          },
          transcription_engine: {
            type: 'string',
            description: 'Engine identifier for Google transcription service',
            enum: ['Google'],
          },
          use_enhanced: {
            type: 'boolean',
            description: 'Enables enhanced transcription, this works for models `phone_call` and `video`.',
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
      transcription_engine_telnyx_config: {
        type: 'object',
        title: 'Transcription engine Telnyx config',
        properties: {
          language: {
            $ref: '#/$defs/telnyx_transcription_language',
          },
          transcription_engine: {
            type: 'string',
            description: 'Engine identifier for Telnyx transcription service',
            enum: ['Telnyx'],
          },
          transcription_model: {
            type: 'string',
            description: 'The model to use for transcription.',
            enum: ['openai/whisper-tiny', 'openai/whisper-large-v3-turbo'],
          },
        },
      },
      telnyx_transcription_language: {
        type: 'string',
        title: 'Telnyx transcription engine list of languages',
        description: 'Language to use for speech recognition',
        enum: [
          'en',
          'zh',
          'de',
          'es',
          'ru',
          'ko',
          'fr',
          'ja',
          'pt',
          'tr',
          'pl',
          'ca',
          'nl',
          'ar',
          'sv',
          'it',
          'id',
          'hi',
          'fi',
          'vi',
          'he',
          'uk',
          'el',
          'ms',
          'cs',
          'ro',
          'da',
          'hu',
          'ta',
          'no',
          'th',
          'ur',
          'hr',
          'bg',
          'lt',
          'la',
          'mi',
          'ml',
          'cy',
          'sk',
          'te',
          'fa',
          'lv',
          'bn',
          'sr',
          'az',
          'sl',
          'kn',
          'et',
          'mk',
          'br',
          'eu',
          'is',
          'hy',
          'ne',
          'mn',
          'bs',
          'kk',
          'sq',
          'sw',
          'gl',
          'mr',
          'pa',
          'si',
          'km',
          'sn',
          'yo',
          'so',
          'af',
          'oc',
          'ka',
          'be',
          'tg',
          'sd',
          'gu',
          'am',
          'yi',
          'lo',
          'uz',
          'fo',
          'ht',
          'ps',
          'tk',
          'nn',
          'mt',
          'sa',
          'lb',
          'my',
          'bo',
          'tl',
          'mg',
          'as',
          'tt',
          'haw',
          'ln',
          'ha',
          'ba',
          'jw',
          'su',
          'auto_detect',
        ],
      },
      transcription_engine_azure_config: {
        type: 'object',
        title: 'Transcription engine Azure config',
        properties: {
          region: {
            type: 'string',
            title: 'Azure transcription engine list of regions',
            description: 'Azure region to use for speech recognition',
            enum: ['australiaeast', 'centralindia', 'eastus', 'northcentralus', 'westeurope', 'westus2'],
          },
          transcription_engine: {
            type: 'string',
            description: 'Engine identifier for Azure transcription service',
            enum: ['Azure'],
          },
          api_key_ref: {
            type: 'string',
            description:
              'Reference to the API key for authentication. See [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) for details. The parameter is optional as defaults are available for some regions.',
          },
          language: {
            type: 'string',
            title: 'Azure transcription engine list of languages',
            description: 'Language to use for speech recognition',
            enum: [
              'af',
              'am',
              'ar',
              'bg',
              'bn',
              'bs',
              'ca',
              'cs',
              'cy',
              'da',
              'de',
              'el',
              'en',
              'es',
              'et',
              'eu',
              'fa',
              'fi',
              'fr',
              'ga',
              'gl',
              'gu',
              'he',
              'hi',
              'hr',
              'hu',
              'hy',
              'id',
              'is',
              'it',
              'ja',
              'ka',
              'kk',
              'km',
              'kn',
              'ko',
              'lo',
              'lt',
              'lv',
              'mk',
              'ml',
              'mn',
              'mr',
              'ms',
              'mt',
              'my',
              'nb',
              'ne',
              'nl',
              'pl',
              'ps',
              'pt',
              'ro',
              'ru',
              'si',
              'sk',
              'sl',
              'so',
              'sq',
              'sr',
              'sv',
              'sw',
              'ta',
              'te',
              'th',
              'tr',
              'uk',
              'ur',
              'uz',
              'vi',
              'wuu',
              'yue',
              'zh',
              'zu',
              'auto',
            ],
          },
        },
        required: ['region', 'transcription_engine'],
      },
      transcription_engine_a_config: {
        type: 'object',
        title: 'Transcription engine A config',
        properties: {
          enable_speaker_diarization: {
            type: 'boolean',
            description: 'Enables speaker diarization.',
          },
          hints: {
            type: 'array',
            description: 'Hints to improve transcription accuracy.',
            items: {
              type: 'string',
            },
          },
          interim_results: {
            type: 'boolean',
            description:
              'Whether to send also interim results. If set to false, only final results will be sent.',
          },
          language: {
            $ref: '#/$defs/google_transcription_language',
          },
          max_speaker_count: {
            type: 'integer',
            description: 'Defines maximum number of speakers in the conversation.',
          },
          min_speaker_count: {
            type: 'integer',
            description: 'Defines minimum number of speakers in the conversation.',
          },
          model: {
            type: 'string',
            description: 'The model to use for transcription.',
            enum: [
              'latest_long',
              'latest_short',
              'command_and_search',
              'phone_call',
              'video',
              'default',
              'medical_conversation',
              'medical_dictation',
            ],
          },
          profanity_filter: {
            type: 'boolean',
            description: 'Enables profanity_filter.',
          },
          speech_context: {
            type: 'array',
            description: 'Speech context to improve transcription accuracy.',
            items: {
              type: 'object',
              properties: {
                boost: {
                  type: 'number',
                  description: 'Boost factor for the speech context.',
                },
                phrases: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
            },
          },
          transcription_engine: {
            type: 'string',
            description: 'Engine identifier for Google transcription service',
            enum: ['A'],
          },
          use_enhanced: {
            type: 'boolean',
            description: 'Enables enhanced transcription, this works for models `phone_call` and `video`.',
          },
        },
      },
      transcription_engine_b_config: {
        type: 'object',
        title: 'Transcription engine B config',
        properties: {
          language: {
            $ref: '#/$defs/telnyx_transcription_language',
          },
          transcription_engine: {
            type: 'string',
            description: 'Engine identifier for Telnyx transcription service',
            enum: ['B'],
          },
          transcription_model: {
            type: 'string',
            description: 'The model to use for transcription.',
            enum: ['openai/whisper-tiny', 'openai/whisper-large-v3-turbo'],
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.calls.actions.answer(call_control_id, body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
