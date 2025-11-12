// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'user_tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user_tags',
  operationId: 'GetUserTags',
};

export const tool: Tool = {
  name: 'list_user_tags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all user tags.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_tag_list_response',\n  $defs: {\n    user_tag_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            number_tags: {\n              type: 'array',\n              description: 'A list of your tags on the given resource type. NOTE: The casing of the tags returned will not necessarily match the casing of the tags when they were added to a resource. This is because the tags will have the casing of the first time they were used within the Telnyx system regardless of source.',\n              items: {\n                type: 'string'\n              }\n            },\n            outbound_profile_tags: {\n              type: 'array',\n              description: 'A list of your tags on the given resource type. NOTE: The casing of the tags returned will not necessarily match the casing of the tags when they were added to a resource. This is because the tags will have the casing of the first time they were used within the Telnyx system regardless of source.',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[starts_with]',
        properties: {
          starts_with: {
            type: 'string',
            description: 'Filter tags by prefix',
          },
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.userTags.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
