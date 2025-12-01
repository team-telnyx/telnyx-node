// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts.comments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts/{id}/comments',
  operationId: 'FindPortoutComments',
};

export const tool: Tool = {
  name: 'list_portouts_comments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of comments for a portout request.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/comment_list_response',\n  $defs: {\n    comment_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              body: {\n                type: 'string',\n                description: 'Comment body'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Comment creation timestamp in ISO 8601 format'\n              },\n              user_id: {\n                type: 'string',\n                description: 'Identifies the user who created the comment. Will be null if created by Telnyx Admin'\n              },\n              portout_id: {\n                type: 'string',\n                description: 'Identifies the associated port request'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              }\n            },\n            required: [              'id',\n              'body',\n              'created_at',\n              'user_id'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/metadata'\n        }\n      }\n    },\n    metadata: {\n      type: 'object',\n      title: 'Metadata',\n      properties: {\n        page_number: {\n          type: 'number',\n          description: 'Current Page based on pagination settings (included when defaults are used.)'\n        },\n        page_size: {\n          type: 'number',\n          description: 'Number of results to return per page based on pagination settings (included when defaults are used.)'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages based on pagination settings'\n        },\n        total_results: {\n          type: 'number',\n          description: 'Total number of results'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.portouts.comments.list(id)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
