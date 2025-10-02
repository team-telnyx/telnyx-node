// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls',
  operationId: 'DialCall',
};

export const tool: Tool = {
  name: 'dial_calls',
  description:
    'Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.\n\n**Expected Webhooks:**\n\n- `call.initiated`\n- `call.answered` or `call.hangup`\n- `call.machine.detection.ended` if `answering_machine_detection` was requested\n- `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting\n- `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested\n- `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected\n- `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set\n\nWhen the `record` parameter is set to `record-from-answer`, the response will include a `recording_id` field.\n',
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
        description:
          'The ID of the Call Control App (formerly ID of the connection) to be used when dialing the destination.',
      },
      from: {
        type: 'string',
        description:
          'The `from` number to be used as the caller id presented to the destination (`to` number). The number should be in +E164 format.',
      },
      to: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        description:
          'The DID or SIP URI to dial out to. Multiple DID or SIP URIs can be provided using an array of strings',
      },
      answering_machine_detection: {
        type: 'string',
        description:
          'Enables Answering Machine Detection. Telnyx offers Premium and Standard detections. With Premium detection, when a call is answered, Telnyx runs real-time detection and sends a `call.machine.premium.detection.ended` webhook with one of the following results: `human_residence`, `human_business`, `machine`, `silence` or `fax_detected`. If we detect a beep, we also send a `call.machine.premium.greeting.ended` webhook with the result of `beep_detected`. If we detect a beep before `call.machine.premium.detection.ended` we only send `call.machine.premium.greeting.ended`, and if we detect a beep after `call.machine.premium.detection.ended`, we send both webhooks. With Standard detection, when a call is answered, Telnyx runs real-time detection to determine if it was picked up by a human or a machine and sends an `call.machine.detection.ended` webhook with the analysis result. If `greeting_end` or `detect_words` is used and a `machine` is detected, you will receive another `call.machine.greeting.ended` webhook when the answering machine greeting ends with a beep or silence. If `detect_beep` is used, you will only receive `call.machine.greeting.ended` if a beep is detected.',
        enum: ['premium', 'detect', 'detect_beep', 'detect_words', 'greeting_end', 'disabled'],
      },
      answering_machine_detection_config: {
        type: 'object',
        description: "Optional configuration parameters to modify 'answering_machine_detection' performance.",
        properties: {
          after_greeting_silence_millis: {
            type: 'integer',
            description:
              'Silence duration threshold after a greeting message or voice for it be considered human.',
          },
          between_words_silence_millis: {
            type: 'integer',
            description: 'Maximum threshold for silence between words.',
          },
          greeting_duration_millis: {
            type: 'integer',
            description:
              'Maximum threshold of a human greeting. If greeting longer than this value, considered machine.',
          },
          greeting_silence_duration_millis: {
            type: 'integer',
            description:
              'If machine already detected, maximum threshold for silence between words. If exceeded, the greeting is considered ended.',
          },
          greeting_total_analysis_time_millis: {
            type: 'integer',
            description:
              'If machine already detected, maximum timeout threshold to determine the end of the machine greeting.',
          },
          initial_silence_millis: {
            type: 'integer',
            description: 'If initial silence duration is greater than this value, consider it a machine.',
          },
          maximum_number_of_words: {
            type: 'integer',
            description: 'If number of detected words is greater than this value, consder it a machine.',
          },
          maximum_word_length_millis: {
            type: 'integer',
            description: 'If a single word lasts longer than this threshold, consider it a machine.',
          },
          silence_threshold: {
            type: 'integer',
            description: 'Minimum noise threshold for any analysis.',
          },
          total_analysis_time_millis: {
            type: 'integer',
            description: 'Maximum timeout threshold for overall detection.',
          },
        },
      },
      audio_url: {
        type: 'string',
        description:
          'The URL of a file to be played back to the callee when the call is answered. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.',
      },
      billing_group_id: {
        type: 'string',
        description:
          'Use this field to set the Billing Group ID for the call. Must be a valid and existing Billing Group ID.',
      },
      bridge_intent: {
        type: 'boolean',
        description:
          'Indicates the intent to bridge this call with the call specified in link_to. When bridge_intent is true, link_to becomes required and the from number will be overwritten by the from number from the linked call.',
      },
      bridge_on_answer: {
        type: 'boolean',
        description:
          'Whether to automatically bridge answered call to the call specified in link_to. When bridge_on_answer is true, link_to becomes required.',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore others Dial commands with the same `command_id`.',
      },
      conference_config: {
        type: 'object',
        description: 'Optional configuration parameters to dial new participant into a conference.',
        properties: {
          id: {
            type: 'string',
            description: 'Conference ID to be joined',
          },
          beep_enabled: {
            type: 'string',
            description:
              'Whether a beep sound should be played when the participant joins and/or leaves the conference. Can be used to override the conference-level setting.',
            enum: ['always', 'never', 'on_enter', 'on_exit'],
          },
          conference_name: {
            type: 'string',
            description: 'Conference name to be joined',
          },
          early_media: {
            type: 'boolean',
            description:
              'Controls the moment when dialled call is joined into conference. If set to `true` user will be joined as soon as media is available (ringback). If `false` user will be joined when call is answered. Defaults to `true`',
          },
          end_conference_on_exit: {
            type: 'boolean',
            description:
              'Whether the conference should end and all remaining participants be hung up after the participant leaves the conference. Defaults to "false".',
          },
          hold: {
            type: 'boolean',
            description:
              'Whether the participant should be put on hold immediately after joining the conference. Defaults to "false".',
          },
          hold_audio_url: {
            type: 'string',
            description:
              'The URL of a file to be played to the participant when they are put on hold after joining the conference. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".',
          },
          hold_media_name: {
            type: 'string',
            description:
              'The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".',
          },
          mute: {
            type: 'boolean',
            description:
              'Whether the participant should be muted immediately after joining the conference. Defaults to "false".',
          },
          soft_end_conference_on_exit: {
            type: 'boolean',
            description:
              'Whether the conference should end after the participant leaves the conference. NOTE this doesn\'t hang up the other participants. Defaults to "false".',
          },
          start_conference_on_create: {
            type: 'boolean',
            description:
              'Whether the conference should be started on creation. If the conference isn\'t started all participants that join are automatically put on hold. Defaults to "true".',
          },
          start_conference_on_enter: {
            type: 'boolean',
            description:
              'Whether the conference should be started after the participant joins the conference. Defaults to "false".',
          },
          supervisor_role: {
            type: 'string',
            description:
              'Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".',
            enum: ['barge', 'monitor', 'none', 'whisper'],
          },
          whisper_call_control_ids: {
            type: 'array',
            description:
              'Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.',
            items: {
              type: 'string',
            },
          },
        },
      },
      custom_headers: {
        type: 'array',
        description: 'Custom headers to be added to the SIP INVITE.',
        items: {
          $ref: '#/$defs/custom_sip_header',
        },
      },
      dialogflow_config: {
        $ref: '#/$defs/dialogflow_config',
      },
      enable_dialogflow: {
        type: 'boolean',
        description: 'Enables Dialogflow for the current call. The default value is false.',
      },
      from_display_name: {
        type: 'string',
        description:
          'The `from_display_name` string to be used as the caller id name (SIP From Display Name) presented to the destination (`to` number). The string should have a maximum of 128 characters, containing only letters, numbers, spaces, and -_~!.+ special characters. If ommited, the display name will be the same as the number in the `from` field.',
      },
      link_to: {
        type: 'string',
        description: "Use another call's control id for sharing the same call session id",
      },
      media_encryption: {
        type: 'string',
        description: 'Defines whether media should be encrypted on the call.',
        enum: ['disabled', 'SRTP', 'DTLS'],
      },
      media_name: {
        type: 'string',
        description:
          'The media_name of a file to be played back to the callee when the call is answered. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.',
      },
      park_after_unbridge: {
        type: 'string',
        description:
          'If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg. When park_after_unbridge is set, link_to becomes required.',
      },
      preferred_codecs: {
        type: 'string',
        description:
          'The list of comma-separated codecs in a preferred order for the forked media to be received.',
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
      sip_auth_password: {
        type: 'string',
        description: 'SIP Authentication password used for SIP challenges.',
      },
      sip_auth_username: {
        type: 'string',
        description: 'SIP Authentication username used for SIP challenges.',
      },
      sip_headers: {
        type: 'array',
        description:
          'SIP headers to be added to the SIP INVITE request. Currently only User-to-User header is supported.',
        items: {
          $ref: '#/$defs/sip_header',
        },
      },
      sip_transport_protocol: {
        type: 'string',
        description: 'Defines SIP transport protocol to be used on the call.',
        enum: ['UDP', 'TCP', 'TLS'],
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
      stream_bidirectional_sampling_rate: {
        type: 'string',
        title: 'Bidirectional Stream Sampling Rate',
        description: 'Audio sampling rate.',
        enum: [8000, 16000, 22050, 24000, 48000],
      },
      stream_bidirectional_target_legs: {
        $ref: '#/$defs/stream_bidirectional_target_legs',
      },
      stream_codec: {
        $ref: '#/$defs/stream_codec',
      },
      stream_establish_before_call_originate: {
        type: 'boolean',
        description:
          'Establish websocket connection before dialing the destination. This is useful for cases where the websocket connection takes a long time to establish.',
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
      supervise_call_control_id: {
        type: 'string',
        description: 'The call leg which will be supervised by the new call.',
      },
      supervisor_role: {
        type: 'string',
        description:
          "The role of the supervisor call. 'barge' means that supervisor call hears and is being heard by both ends of the call (caller & callee). 'whisper' means that only supervised_call_control_id hears supervisor but supervisor can hear everything. 'monitor' means that nobody can hear supervisor call, but supervisor can hear everything on the call.",
        enum: ['barge', 'whisper', 'monitor'],
      },
      time_limit_secs: {
        type: 'integer',
        description:
          'Sets the maximum duration of a Call Control Leg in seconds. If the time limit is reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `time_limit` will be sent. For example, by setting a time limit of 120 seconds, a Call Leg will be automatically terminated two minutes after being answered. The default time limit is 14400 seconds or 4 hours and this is also the maximum allowed call length.',
      },
      timeout_secs: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the call to be answered by the destination to which it is being called. If the timeout is reached before an answer is received, the call will hangup and a `call.hangup` webhook with a `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum value is 600 seconds.',
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
    required: ['connection_id', 'from', 'to'],
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
      dialogflow_config: {
        type: 'object',
        title: 'Dialogflow Config',
        properties: {
          analyze_sentiment: {
            type: 'boolean',
            description: 'Enable sentiment analysis from Dialogflow.',
          },
          partial_automated_agent_reply: {
            type: 'boolean',
            description: 'Enable partial automated agent reply from Dialogflow.',
          },
        },
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
            enum: ['Google', 'Telnyx', 'Deepgram', 'A', 'B'],
          },
          transcription_engine_config: {
            anyOf: [
              {
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
                    description:
                      'Enables enhanced transcription, this works for models `phone_call` and `video`.',
                  },
                },
              },
              {
                type: 'object',
                title: 'Transcription engine Telnyx config',
                properties: {
                  language: {
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
              {
                type: 'object',
                title: 'Transcription engine Deepgram config',
                properties: {
                  language: {
                    type: 'string',
                    title: 'Deepgram transcription language',
                    description:
                      'Language to use for speech recognition. Available languages depend on the selected model.',
                  },
                  transcription_engine: {
                    type: 'string',
                    description: 'Engine identifier for Deepgram transcription service',
                    enum: ['Deepgram'],
                  },
                  transcription_model: {
                    type: 'string',
                    description: 'The model to use for transcription.',
                    enum: ['deepgram/nova-2', 'deepgram/nova-3'],
                  },
                },
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
  const body = args as any;
  return asTextContentResult(await client.calls.dial(body));
};

export default { metadata, tool, handler };
