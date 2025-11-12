// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'text_to_speech',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/text-to-speech/voices',
  operationId: 'listTextToSpeechVoices',
};

export const tool: Tool = {
  name: 'list_voices_text_to_speech',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of voices that can be used with the text to speech commands.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/text_to_speech_list_voices_response',\n  $defs: {\n    text_to_speech_list_voices_response: {\n      type: 'object',\n      properties: {\n        voices: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              accent: {\n                type: 'string'\n              },\n              age: {\n                type: 'string'\n              },\n              gender: {\n                type: 'string'\n              },\n              label: {\n                type: 'string'\n              },\n              language: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              provider: {\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      elevenlabs_api_key_ref: {
        type: 'string',
        description: 'Reference to your ElevenLabs API key stored in the Telnyx Portal',
      },
      provider: {
        type: 'string',
        description: 'Filter voices by provider',
        enum: ['aws', 'azure', 'elevenlabs', 'telnyx'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.textToSpeech.listVoices(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
