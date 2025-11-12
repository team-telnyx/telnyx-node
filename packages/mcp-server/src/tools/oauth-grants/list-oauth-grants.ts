// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'oauth_grants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth_grants',
};

export const tool: Tool = {
  name: 'list_oauth_grants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a paginated list of OAuth grants for the authenticated user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth_grant_list_response',\n  $defs: {\n    oauth_grant_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/oauth_grant'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta_oauth'\n        }\n      }\n    },\n    oauth_grant: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the OAuth grant'\n        },\n        client_id: {\n          type: 'string',\n          description: 'OAuth client identifier'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the grant was created',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Record type identifier',\n          enum: [            'oauth_grant'\n          ]\n        },\n        scopes: {\n          type: 'array',\n          description: 'List of granted OAuth scopes',\n          items: {\n            type: 'string'\n          }\n        },\n        last_used_at: {\n          type: 'string',\n          description: 'Timestamp when the grant was last used',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'client_id',\n        'created_at',\n        'record_type',\n        'scopes'\n      ]\n    },\n    pagination_meta_oauth: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer',\n          description: 'Current page number'\n        },\n        page_size: {\n          type: 'integer',\n          description: 'Number of items per page'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'Total number of pages'\n        },\n        total_results: {\n          type: 'integer',\n          description: 'Total number of results'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'page[number]': {
        type: 'integer',
        description: 'Page number',
      },
      'page[size]': {
        type: 'integer',
        description: 'Number of results per page',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.oauthGrants.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
