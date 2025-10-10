// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'well_known',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/.well-known/oauth-authorization-server',
};

export const tool: Tool = {
  name: 'retrieve_authorization_server_metadata_well_known',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOAuth 2.0 Authorization Server Metadata (RFC 8414)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/well_known_retrieve_authorization_server_metadata_response',\n  $defs: {\n    well_known_retrieve_authorization_server_metadata_response: {\n      type: 'object',\n      properties: {\n        authorization_endpoint: {\n          type: 'string',\n          description: 'Authorization endpoint URL'\n        },\n        code_challenge_methods_supported: {\n          type: 'array',\n          description: 'Supported PKCE code challenge methods',\n          items: {\n            type: 'string'\n          }\n        },\n        grant_types_supported: {\n          type: 'array',\n          description: 'Supported grant types',\n          items: {\n            type: 'string'\n          }\n        },\n        introspection_endpoint: {\n          type: 'string',\n          description: 'Token introspection endpoint URL'\n        },\n        issuer: {\n          type: 'string',\n          description: 'Authorization server issuer URL'\n        },\n        jwks_uri: {\n          type: 'string',\n          description: 'JWK Set endpoint URL'\n        },\n        registration_endpoint: {\n          type: 'string',\n          description: 'Dynamic client registration endpoint URL'\n        },\n        response_types_supported: {\n          type: 'array',\n          description: 'Supported response types',\n          items: {\n            type: 'string'\n          }\n        },\n        scopes_supported: {\n          type: 'array',\n          description: 'Supported OAuth scopes',\n          items: {\n            type: 'string'\n          }\n        },\n        token_endpoint: {\n          type: 'string',\n          description: 'Token endpoint URL'\n        },\n        token_endpoint_auth_methods_supported: {\n          type: 'array',\n          description: 'Supported token endpoint authentication methods',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.wellKnown.retrieveAuthorizationServerMetadata()),
  );
};

export default { metadata, tool, handler };
