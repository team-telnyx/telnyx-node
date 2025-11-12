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
  httpPath: '/ai/embeddings/{task_id}',
  operationId: 'GetEmbeddingTask',
};

export const tool: Tool = {
  name: 'retrieve_ai_embeddings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck the status of a current embedding task. Will be one of the following:\n- `queued` - Task is waiting to be picked up by a worker\n- `processing` - The embedding task is running\n- `success` - Task completed successfully and the bucket is embedded\n- `failure` - Task failed and no files were embedded successfully\n- `partial_success` - Some files were embedded successfully, but at least one failed\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embedding_retrieve_response',\n  $defs: {\n    embedding_retrieve_response: {\n      type: 'object',\n      title: 'TaskStatusResponse',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            created_at: {\n              type: 'string',\n              title: 'Created At'\n            },\n            finished_at: {\n              type: 'string',\n              title: 'Finished At'\n            },\n            status: {\n              $ref: '#/$defs/background_task_status'\n            },\n            task_id: {\n              type: 'string',\n              title: 'Task ID'\n            },\n            task_name: {\n              type: 'string',\n              title: 'Task Name'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    background_task_status: {\n      type: 'string',\n      title: 'BackgroundTaskStatus',\n      description: 'Status of an embeddings task.',\n      enum: [        'queued',\n        'processing',\n        'success',\n        'failure',\n        'partial_success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['task_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { task_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.embeddings.retrieve(task_id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
