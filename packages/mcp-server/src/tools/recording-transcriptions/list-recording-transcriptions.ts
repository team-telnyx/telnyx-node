// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'recording_transcriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/recording_transcriptions',
  operationId: 'getRecordingTranscriptions',
};

export const tool: Tool = {
  name: 'list_recording_transcriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your recording transcriptions.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/recording_transcription'\n      }\n    },\n    meta: {\n      type: 'object',\n      title: 'Cursor Pagination Meta',\n      properties: {\n        cursors: {\n          type: 'object',\n          properties: {\n            after: {\n              type: 'string',\n              description: 'Opaque identifier of next page.'\n            },\n            before: {\n              type: 'string',\n              description: 'Opaque identifier of previous page.'\n            }\n          }\n        },\n        next: {\n          type: 'string',\n          description: 'Path to next page.'\n        },\n        previous: {\n          type: 'string',\n          description: 'Path to previous page.'\n        }\n      }\n    }\n  },\n  $defs: {\n    recording_transcription: {\n      type: 'object',\n      title: 'RecordingTranscriptionsResponseData',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the recording transcription.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        duration_millis: {\n          type: 'integer',\n          description: 'The duration of the recording transcription in milliseconds.'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'recording_transcription'\n          ]\n        },\n        recording_id: {\n          type: 'string',\n          description: 'Uniquely identifies the recording associated with this transcription.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the recording transcription. Only `completed` has transcription text available.',\n          enum: [            'in-progress',\n            'completed'\n          ]\n        },\n        transcription_text: {\n          type: 'string',\n          description: 'The recording\\'s transcribed text.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.recordingTranscriptions.list()));
};

export default { metadata, tool, handler };
