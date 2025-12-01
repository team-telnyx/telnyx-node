// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/record_start',
  operationId: 'StartCallRecord',
};

export const tool: Tool = {
  name: 'start_recording_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.\n\n**Expected Webhooks:**\n\n- `call.recording.saved`\n- `call.recording.transcription.saved`\n- `call.recording.error`\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_start_recording_response',\n  $defs: {\n    action_start_recording_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      channels: {
        type: 'string',
        description:
          'When `dual`, final audio file will be stereo recorded with the first leg on channel A, and the rest on channel B.',
        enum: ['single', 'dual'],
      },
      format: {
        type: 'string',
        description:
          'The audio file format used when storing the call recording. Can be either `mp3` or `wav`.',
        enum: ['wav', 'mp3'],
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
      custom_file_name: {
        type: 'string',
        description:
          'The custom recording file name to be used instead of the default `call_leg_id`. Telnyx will still add a Unix timestamp suffix.',
      },
      max_length: {
        type: 'integer',
        description:
          'Defines the maximum length for the recording in seconds. The minimum value is 0. The maximum value is 14400. The default value is 0 (infinite)',
      },
      play_beep: {
        type: 'boolean',
        description: 'If enabled, a beep sound will be played at the start of a recording.',
      },
      recording_track: {
        type: 'string',
        description:
          'The audio track to be recorded. Can be either `both`, `inbound` or `outbound`. If only single track is specified (`inbound`, `outbound`), `channels` configuration is ignored and it will be recorded as mono (single channel).',
        enum: ['both', 'inbound', 'outbound'],
      },
      timeout_secs: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected. The timer only starts when the speech is detected. Please note that call transcription is used to detect silence and the related charge will be applied. The minimum value is 0. The default value is 0 (infinite)',
      },
      transcription: {
        type: 'boolean',
        description: 'Enable post recording transcription. The default value is false.',
      },
      transcription_engine: {
        type: 'string',
        description: 'Engine to use for speech recognition. `A` - `Google`',
      },
      transcription_language: {
        type: 'string',
        title: 'Google transcription engine list of languages',
        description: 'Language to use for speech recognition',
        enum: [
          'af-ZA',
          'am-ET',
          'ar-AE',
          'ar-BH',
          'ar-DZ',
          'ar-EG',
          'ar-IL',
          'ar-IQ',
          'ar-JO',
          'ar-KW',
          'ar-LB',
          'ar-MA',
          'ar-MR',
          'ar-OM',
          'ar-PS',
          'ar-QA',
          'ar-SA',
          'ar-TN',
          'ar-YE',
          'az-AZ',
          'bg-BG',
          'bn-BD',
          'bn-IN',
          'bs-BA',
          'ca-ES',
          'cs-CZ',
          'da-DK',
          'de-AT',
          'de-CH',
          'de-DE',
          'el-GR',
          'en-AU',
          'en-CA',
          'en-GB',
          'en-GH',
          'en-HK',
          'en-IE',
          'en-IN',
          'en-KE',
          'en-NG',
          'en-NZ',
          'en-PH',
          'en-PK',
          'en-SG',
          'en-TZ',
          'en-US',
          'en-ZA',
          'es-AR',
          'es-BO',
          'es-CL',
          'es-CO',
          'es-CR',
          'es-DO',
          'es-EC',
          'es-ES',
          'es-GT',
          'es-HN',
          'es-MX',
          'es-NI',
          'es-PA',
          'es-PE',
          'es-PR',
          'es-PY',
          'es-SV',
          'es-US',
          'es-UY',
          'es-VE',
          'et-EE',
          'eu-ES',
          'fa-IR',
          'fi-FI',
          'fil-PH',
          'fr-BE',
          'fr-CA',
          'fr-CH',
          'fr-FR',
          'gl-ES',
          'gu-IN',
          'hi-IN',
          'hr-HR',
          'hu-HU',
          'hy-AM',
          'id-ID',
          'is-IS',
          'it-CH',
          'it-IT',
          'iw-IL',
          'ja-JP',
          'jv-ID',
          'ka-GE',
          'kk-KZ',
          'km-KH',
          'kn-IN',
          'ko-KR',
          'lo-LA',
          'lt-LT',
          'lv-LV',
          'mk-MK',
          'ml-IN',
          'mn-MN',
          'mr-IN',
          'ms-MY',
          'my-MM',
          'ne-NP',
          'nl-BE',
          'nl-NL',
          'no-NO',
          'pa-Guru-IN',
          'pl-PL',
          'pt-BR',
          'pt-PT',
          'ro-RO',
          'ru-RU',
          'rw-RW',
          'si-LK',
          'sk-SK',
          'sl-SI',
          'sq-AL',
          'sr-RS',
          'ss-latn-za',
          'st-ZA',
          'su-ID',
          'sv-SE',
          'sw-KE',
          'sw-TZ',
          'ta-IN',
          'ta-LK',
          'ta-MY',
          'ta-SG',
          'te-IN',
          'th-TH',
          'tn-latn-za',
          'tr-TR',
          'ts-ZA',
          'uk-UA',
          'ur-IN',
          'ur-PK',
          'uz-UZ',
          've-ZA',
          'vi-VN',
          'xh-ZA',
          'yue-Hant-HK',
          'zh',
          'zh-TW',
          'zu-ZA',
        ],
      },
      transcription_max_speaker_count: {
        type: 'integer',
        description:
          'Defines maximum number of speakers in the conversation. Applies to `google` engine only.',
      },
      transcription_min_speaker_count: {
        type: 'integer',
        description:
          'Defines minimum number of speakers in the conversation. Applies to `google` engine only.',
      },
      transcription_profanity_filter: {
        type: 'boolean',
        description: 'Enables profanity_filter. Applies to `google` engine only.',
      },
      transcription_speaker_diarization: {
        type: 'boolean',
        description: 'Enables speaker diarization. Applies to `google` engine only.',
      },
      trim: {
        type: 'string',
        description:
          'When set to `trim-silence`, silence will be removed from the beginning and end of the recording.',
        enum: ['trim-silence'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id', 'channels', 'format'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.calls.actions.startRecording(call_control_id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
