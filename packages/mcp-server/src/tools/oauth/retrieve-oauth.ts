// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'oauth',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth/consent/{consent_token}',
};

export const tool: Tool = {
  name: 'retrieve_oauth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve details about an OAuth consent token\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth_retrieve_response',\n  $defs: {\n    oauth_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            client_id: {\n              type: 'string',\n              description: 'Client ID'\n            },\n            logo_uri: {\n              type: 'string',\n              description: 'URL of the client logo'\n            },\n            name: {\n              type: 'string',\n              description: 'Client name'\n            },\n            policy_uri: {\n              type: 'string',\n              description: 'URL of the client\\'s privacy policy'\n            },\n            redirect_uri: {\n              type: 'string',\n              description: 'The redirect URI for this authorization'\n            },\n            requested_scopes: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Scope ID'\n                  },\n                  description: {\n                    type: 'string',\n                    description: 'Scope description'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Scope name'\n                  }\n                }\n              }\n            },\n            tos_uri: {\n              type: 'string',\n              description: 'URL of the client\\'s terms of service'\n            },\n            verified: {\n              type: 'boolean',\n              description: 'Whether the client is verified'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      consent_token: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['consent_token'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { consent_token, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.oauth.retrieve(consent_token)));
};

export default { metadata, tool, handler };
