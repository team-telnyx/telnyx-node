// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.embeddings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/embeddings',
  operationId: 'GetTasksByStatus',
};

export const tool: Tool = {
  name: 'list_ai_embeddings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve tasks for the user that are either `queued`, `processing`, `failed`, `success` or `partial_success` based on the query string. Defaults to `queued` and `processing`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embedding_list_response',\n  $defs: {\n    embedding_list_response: {\n      type: 'object',\n      title: 'BackgroundTasksQueryResponseData',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            type: 'object',\n            title: 'BackgroundTasksQueryResponse',\n            properties: {\n              created_at: {\n                type: 'string',\n                title: 'Created At',\n                format: 'date-time'\n              },\n              status: {\n                $ref: '#/$defs/background_task_status'\n              },\n              task_id: {\n                type: 'string',\n                title: 'Task Id'\n              },\n              task_name: {\n                type: 'string',\n                title: 'Task Name'\n              },\n              user_id: {\n                type: 'string',\n                title: 'User Id'\n              },\n              bucket: {\n                type: 'string',\n                title: 'Bucket'\n              },\n              finished_at: {\n                type: 'string',\n                title: 'Finished At',\n                format: 'date-time'\n              }\n            },\n            required: [              'created_at',\n              'status',\n              'task_id',\n              'task_name',\n              'user_id'\n            ]\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    background_task_status: {\n      type: 'string',\n      title: 'BackgroundTaskStatus',\n      description: 'Status of an embeddings task.',\n      enum: [        'queued',\n        'processing',\n        'success',\n        'failure',\n        'partial_success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'array',
        title: 'Status',
        description: 'List of task statuses i.e. `status=queued&status=processing`',
        items: {
          type: 'string',
        },
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.embeddings.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
