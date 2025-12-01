// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'queues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/queues/{queue_name}',
  operationId: 'RetrieveCallQueue',
};

export const tool: Tool = {
  name: 'retrieve_queues',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve an existing call queue\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/queue_retrieve_response',\n  $defs: {\n    queue_retrieve_response: {\n      type: 'object',\n      title: 'Queue Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Queue',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Uniquely identifies the queue'\n            },\n            average_wait_time_secs: {\n              type: 'integer',\n              description: 'The average time that the calls currently in the queue have spent waiting, given in seconds.'\n            },\n            created_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date of when the queue was created'\n            },\n            current_size: {\n              type: 'integer',\n              description: 'The number of calls currently in the queue'\n            },\n            max_size: {\n              type: 'integer',\n              description: 'The maximum number of calls allowed in the queue'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the queue'\n            },\n            record_type: {\n              type: 'string',\n              enum: [                'queue'\n              ]\n            },\n            updated_at: {\n              type: 'string',\n              description: 'ISO 8601 formatted date of when the queue was last updated'\n            }\n          },\n          required: [            'id',\n            'average_wait_time_secs',\n            'created_at',\n            'current_size',\n            'max_size',\n            'name',\n            'record_type',\n            'updated_at'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      queue_name: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['queue_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { queue_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.queues.retrieve(queue_name)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
