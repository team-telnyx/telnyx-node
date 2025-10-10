// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'oauth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oauth/register',
};

export const tool: Tool = {
  name: 'register_oauth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRegister a new OAuth client dynamically (RFC 7591)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth_register_response',\n  $defs: {\n    oauth_register_response: {\n      type: 'object',\n      properties: {\n        client_id: {\n          type: 'string',\n          description: 'Unique client identifier'\n        },\n        client_id_issued_at: {\n          type: 'integer',\n          description: 'Unix timestamp of when the client ID was issued'\n        },\n        client_name: {\n          type: 'string',\n          description: 'Human-readable client name'\n        },\n        client_secret: {\n          type: 'string',\n          description: 'Client secret (only for confidential clients)'\n        },\n        grant_types: {\n          type: 'array',\n          description: 'Array of allowed grant types',\n          items: {\n            type: 'string'\n          }\n        },\n        logo_uri: {\n          type: 'string',\n          description: 'URL of the client logo'\n        },\n        policy_uri: {\n          type: 'string',\n          description: 'URL of the client\\'s privacy policy'\n        },\n        redirect_uris: {\n          type: 'array',\n          description: 'Array of redirection URIs',\n          items: {\n            type: 'string'\n          }\n        },\n        response_types: {\n          type: 'array',\n          description: 'Array of allowed response types',\n          items: {\n            type: 'string'\n          }\n        },\n        scope: {\n          type: 'string',\n          description: 'Space-separated scope values'\n        },\n        token_endpoint_auth_method: {\n          type: 'string',\n          description: 'Token endpoint authentication method'\n        },\n        tos_uri: {\n          type: 'string',\n          description: 'URL of the client\\'s terms of service'\n        }\n      },\n      required: [        'client_id',\n        'client_id_issued_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      client_name: {
        type: 'string',
        description: 'Human-readable string name of the client to be presented to the end-user',
      },
      grant_types: {
        type: 'array',
        description: 'Array of OAuth 2.0 grant type strings that the client may use',
        items: {
          type: 'string',
          enum: ['authorization_code', 'client_credentials', 'refresh_token'],
        },
      },
      logo_uri: {
        type: 'string',
        description: 'URL of the client logo',
      },
      policy_uri: {
        type: 'string',
        description: "URL of the client's privacy policy",
      },
      redirect_uris: {
        type: 'array',
        description: 'Array of redirection URI strings for use in redirect-based flows',
        items: {
          type: 'string',
        },
      },
      response_types: {
        type: 'array',
        description: 'Array of the OAuth 2.0 response type strings that the client may use',
        items: {
          type: 'string',
        },
      },
      scope: {
        type: 'string',
        description: 'Space-separated string of scope values that the client may use',
      },
      token_endpoint_auth_method: {
        type: 'string',
        description: 'Authentication method for the token endpoint',
        enum: ['none', 'client_secret_basic', 'client_secret_post'],
      },
      tos_uri: {
        type: 'string',
        description: "URL of the client's terms of service",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.oauth.register(body)));
};

export default { metadata, tool, handler };
