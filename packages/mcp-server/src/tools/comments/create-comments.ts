// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'comments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/comments',
  operationId: 'CreateComment',
};

export const tool: Tool = {
  name: 'create_comments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a comment\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/comment_create_response',\n  $defs: {\n    comment_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            body: {\n              type: 'string'\n            },\n            comment_record_id: {\n              type: 'string'\n            },\n            comment_record_type: {\n              type: 'string',\n              enum: [                'sub_number_order',\n                'requirement_group'\n              ]\n            },\n            commenter: {\n              type: 'string'\n            },\n            commenter_type: {\n              type: 'string',\n              enum: [                'admin',\n                'user'\n              ]\n            },\n            created_at: {\n              type: 'string',\n              description: 'An ISO 8901 datetime string denoting when the comment was created.',\n              format: 'date-time'\n            },\n            read_at: {\n              type: 'string',\n              description: 'An ISO 8901 datetime string for when the comment was read.',\n              format: 'date-time'\n            },\n            updated_at: {\n              type: 'string',\n              description: 'An ISO 8901 datetime string for when the comment was updated.',\n              format: 'date-time'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'string',
      },
      comment_record_id: {
        type: 'string',
      },
      comment_record_type: {
        type: 'string',
        enum: ['sub_number_order', 'requirement_group'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.comments.create(body)));
};

export default { metadata, tool, handler };
