// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/ai_assistant_start',
  operationId: 'CallStartAIAssistant',
};

export const tool: Tool = {
  name: 'start_ai_assistant_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart an AI assistant on the call.\n\n**Expected Webhooks:**\n\n- `call.conversation.ended`\n- `call.conversation_insights.generated`\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_start_ai_assistant_response',\n  $defs: {\n    action_start_ai_assistant_response: {\n      type: 'object',\n      title: 'Call Control Command Response With Conversation ID',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Call Control Command Result With Conversation ID',\n          properties: {\n            conversation_id: {\n              type: 'string',\n              description: 'The ID of the conversation created by the command.'\n            },\n            result: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      assistant: {
        type: 'object',
        description: 'AI Assistant configuration',
        properties: {
          id: {
            type: 'string',
            description: 'The identifier of the AI assistant to use',
          },
          instructions: {
            type: 'string',
            description:
              'The system instructions that the voice assistant uses during the start assistant command. This will overwrite the instructions set in the assistant configuration.',
          },
          openai_api_key_ref: {
            type: 'string',
            description: 'Reference to the OpenAI API key. Required only when using OpenAI models',
          },
        },
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
          'Text that will be played when the assistant starts, if none then nothing will be played when the assistant starts. The greeting can be text for any voice or SSML for `AWS.Polly.<voice_id>` voices. There is a 3,000 character limit.',
      },
      interruption_settings: {
        $ref: '#/$defs/interruption_settings',
      },
      transcription: {
        $ref: '#/$defs/transcription_config',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id'],
    $defs: {
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
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.startAIAssistant(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
