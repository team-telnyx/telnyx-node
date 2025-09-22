// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: '$client.oauth_clients',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth_clients/{id}',
};

export const tool: Tool = {
  name: 'retrieve_client_oauth_clients',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single OAuth client by ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        client_id: {\n          type: 'string',\n          description: 'OAuth client identifier'\n        },\n        client_type: {\n          type: 'string',\n          description: 'OAuth client type',\n          enum: [            'public',\n            'confidential'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp when the client was created',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Human-readable name for the OAuth client'\n        },\n        org_id: {\n          type: 'string',\n          description: 'Organization ID that owns this OAuth client'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Record type identifier',\n          enum: [            'oauth_client'\n          ]\n        },\n        require_pkce: {\n          type: 'boolean',\n          description: 'Whether PKCE (Proof Key for Code Exchange) is required for this client'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Timestamp when the client was last updated',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string',\n          description: 'User ID that created this OAuth client'\n        },\n        allowed_grant_types: {\n          type: 'array',\n          description: 'List of allowed OAuth grant types',\n          items: {\n            type: 'string',\n            enum: [              'client_credentials',\n              'authorization_code',\n              'refresh_token'\n            ]\n          }\n        },\n        allowed_scopes: {\n          type: 'array',\n          description: 'List of allowed OAuth scopes',\n          items: {\n            type: 'string'\n          }\n        },\n        client_secret: {\n          type: 'string',\n          description: 'Client secret (only included when available, for confidential clients)'\n        },\n        logo_uri: {\n          type: 'string',\n          description: 'URL of the client logo'\n        },\n        policy_uri: {\n          type: 'string',\n          description: 'URL of the client\\'s privacy policy'\n        },\n        redirect_uris: {\n          type: 'array',\n          description: 'List of allowed redirect URIs',\n          items: {\n            type: 'string'\n          }\n        },\n        tos_uri: {\n          type: 'string',\n          description: 'URL of the client\\'s terms of service'\n        }\n      },\n      required: [        'client_id',\n        'client_type',\n        'created_at',\n        'name',\n        'org_id',\n        'record_type',\n        'require_pkce',\n        'updated_at',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.client.oauthClients.retrieve(id)));
};

export default { metadata, tool, handler };
