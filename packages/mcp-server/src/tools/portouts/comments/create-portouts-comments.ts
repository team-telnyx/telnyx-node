// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts.comments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/portouts/{id}/comments',
  operationId: 'PostPortRequestComment',
};

export const tool: Tool = {
  name: 'create_portouts_comments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a comment on a portout request.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/comment_create_response',\n  $defs: {\n    comment_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            body: {\n              type: 'string',\n              description: 'Comment body'\n            },\n            created_at: {\n              type: 'string',\n              description: 'Comment creation timestamp in ISO 8601 format'\n            },\n            user_id: {\n              type: 'string',\n              description: 'Identifies the user who created the comment. Will be null if created by Telnyx Admin'\n            },\n            portout_id: {\n              type: 'string',\n              description: 'Identifies the associated port request'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            }\n          },\n          required: [            'id',\n            'body',\n            'created_at',\n            'user_id'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      body: {
        type: 'string',
        description: 'Comment to post on this portout request',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.portouts.comments.create(id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
