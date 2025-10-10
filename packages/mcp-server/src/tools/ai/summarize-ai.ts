// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/ai/summarize',
  operationId: 'PostSummary',
};

export const tool: Tool = {
  name: 'summarize_ai',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate a summary of a file's contents. \n\n Supports the following text formats: \n- PDF, HTML, txt, json, csv\n\n Supports the following media formats (billed for both the transcription and summary): \n- flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm\n- Up to 100 MB\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ai_summarize_response',\n  $defs: {\n    ai_summarize_response: {\n      type: 'object',\n      title: 'SummaryResponseData',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'SummaryResponse',\n          properties: {\n            summary: {\n              type: 'string',\n              title: 'Summary'\n            }\n          },\n          required: [            'summary'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket: {
        type: 'string',
        description: 'The name of the bucket that contains the file to be summarized.',
      },
      filename: {
        type: 'string',
        description: 'The name of the file to be summarized.',
      },
      system_prompt: {
        type: 'string',
        description: 'A system prompt to guide the summary generation.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucket', 'filename'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ai.summarize(body)));
};

export default { metadata, tool, handler };
