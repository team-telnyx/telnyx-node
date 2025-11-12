// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.audio',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/audio/transcriptions',
  operationId: 'audio_public_audio_transcriptions_post',
};

export const tool: Tool = {
  name: 'transcribe_ai_audio',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTranscribe speech to text. This endpoint is consistent with the [OpenAI Transcription API](https://platform.openai.com/docs/api-reference/audio/createTranscription) and may be used with the OpenAI JS or Python SDK.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/audio_transcribe_response',\n  $defs: {\n    audio_transcribe_response: {\n      type: 'object',\n      properties: {\n        text: {\n          type: 'string',\n          description: 'The transcribed text for the audio file.'\n        },\n        duration: {\n          type: 'number',\n          description: 'The duration of the audio file in seconds. This is only included if `response_format` is set to `verbose_json`.'\n        },\n        segments: {\n          type: 'array',\n          description: 'Segments of the transcribed text and their corresponding details. This is only included if `response_format` is set to `verbose_json`.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'number',\n                description: 'Unique identifier of the segment.'\n              },\n              end: {\n                type: 'number',\n                description: 'End time of the segment in seconds.'\n              },\n              start: {\n                type: 'number',\n                description: 'Start time of the segment in seconds.'\n              },\n              text: {\n                type: 'string',\n                description: 'Text content of the segment.'\n              }\n            },\n            required: [              'id',\n              'end',\n              'start',\n              'text'\n            ]\n          }\n        }\n      },\n      required: [        'text'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      model: {
        type: 'string',
        description:
          'ID of the model to use. `distil-whisper/distil-large-v2` is lower latency but English-only. `openai/whisper-large-v3-turbo` is multi-lingual but slightly higher latency.',
        enum: ['distil-whisper/distil-large-v2', 'openai/whisper-large-v3-turbo'],
      },
      file: {
        type: 'string',
        description:
          'The audio file object to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm. File uploads are limited to 100 MB. Cannot be used together with `file_url`',
      },
      file_url: {
        type: 'string',
        description:
          'Link to audio file in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm. Support for hosted files is limited to 100MB. Cannot be used together with `file`',
      },
      response_format: {
        type: 'string',
        description:
          'The format of the transcript output. Use `verbose_json` to take advantage of timestamps.',
        enum: ['json', 'verbose_json'],
      },
      'timestamp_granularities[]': {
        type: 'string',
        description:
          'The timestamp granularities to populate for this transcription. `response_format` must be set verbose_json to use timestamp granularities. Currently `segment` is supported.',
        enum: ['segment'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['model'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.audio.transcribe(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
