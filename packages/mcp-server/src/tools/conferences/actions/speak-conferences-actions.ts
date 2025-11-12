// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conferences/{id}/actions/speak',
  operationId: 'SpeakTextToConference',
};

export const tool: Tool = {
  name: 'speak_conferences_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nConvert text to speech and play it to all or some participants.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_speak_response',\n  $defs: {\n    action_speak_response: {\n      type: 'object',\n      title: 'Conference Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/conference_command_result'\n        }\n      }\n    },\n    conference_command_result: {\n      type: 'object',\n      title: 'Conference Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      },\n      required: [        'result'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      payload: {
        type: 'string',
        description: 'The text or SSML to be converted into speech. There is a 3,000 character limit.',
      },
      voice: {
        type: 'string',
        description:
          'Specifies the voice used in speech synthesis.\n\n- Define voices using the format `<Provider>.<Model>.<VoiceId>`. Specifying only the provider will give default values for voice_id and model_id.\n\n **Supported Providers:**\n- **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural voices, which provide more realistic, human-like speech, append `-Neural` to the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html) for compatibility.\n- **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural, Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural, Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)\n- **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g., `ElevenLabs.eleven_multilingual_v2.21m00Tcm4TlvDq8ikWAM`). The `ModelId` part is optional. To use ElevenLabs, you must provide your ElevenLabs API key as an integration identifier secret in `"voice_settings": {"api_key_ref": "<secret_identifier>"}`. See [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret) for details. Check [available voices](https://elevenlabs.io/docs/api-reference/get-voices).\n - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`\n\nFor service_level basic, you may define the gender of the speaker (male or female).',
      },
      call_control_ids: {
        type: 'array',
        description:
          'Call Control IDs of participants who will hear the spoken text. When empty all participants will hear the spoken text.',
        items: {
          type: 'string',
        },
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.',
      },
      language: {
        type: 'string',
        description:
          'The language you want spoken. This parameter is ignored when a `Polly.*` voice is specified.',
        enum: [
          'arb',
          'cmn-CN',
          'cy-GB',
          'da-DK',
          'de-DE',
          'en-AU',
          'en-GB',
          'en-GB-WLS',
          'en-IN',
          'en-US',
          'es-ES',
          'es-MX',
          'es-US',
          'fr-CA',
          'fr-FR',
          'hi-IN',
          'is-IS',
          'it-IT',
          'ja-JP',
          'ko-KR',
          'nb-NO',
          'nl-NL',
          'pl-PL',
          'pt-BR',
          'pt-PT',
          'ro-RO',
          'ru-RU',
          'sv-SE',
          'tr-TR',
        ],
      },
      payload_type: {
        type: 'string',
        description:
          'The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).',
        enum: ['text', 'ssml'],
      },
      region: {
        type: 'string',
        description:
          "Region where the conference data is located. Defaults to the region defined in user's data locality settings (Europe or US).",
        enum: ['Australia', 'Europe', 'Middle East', 'US'],
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'payload', 'voice'],
    $defs: {
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
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.conferences.actions.speak(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
