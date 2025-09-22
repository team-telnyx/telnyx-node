// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client.oauth_grants',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/oauth_grants/{id}',
};

export const tool: Tool = {
  name: 'delete_client_oauth_grants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevoke an OAuth grant\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the OAuth grant'\n        },\n        client_id: {\n          type: 'string',\n          description: 'OAuth client identifier'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the grant was created',\n          format: 'date-time'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Record type identifier',\n          enum: [            'oauth_grant'\n          ]\n        },\n        scopes: {\n          type: 'array',\n          description: 'List of granted OAuth scopes',\n          items: {\n            type: 'string'\n          }\n        },\n        last_used_at: {\n          type: 'string',\n          description: 'Timestamp when the grant was last used',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'client_id',\n        'created_at',\n        'record_type',\n        'scopes'\n      ]\n    }\n  }\n}\n```",
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.client.oauthGrants.delete(id)));
};

export default { metadata, tool, handler };
