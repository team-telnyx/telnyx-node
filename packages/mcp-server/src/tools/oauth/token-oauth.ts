// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'oauth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/oauth/token',
  operationId: 'ExchangeOAuthToken',
};

export const tool: Tool = {
  name: 'token_oauth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExchange authorization code, client credentials, or refresh token for access token\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth_token_response',\n  $defs: {\n    oauth_token_response: {\n      type: 'object',\n      properties: {\n        access_token: {\n          type: 'string',\n          description: 'The access token'\n        },\n        expires_in: {\n          type: 'integer',\n          description: 'Token lifetime in seconds'\n        },\n        token_type: {\n          type: 'string',\n          description: 'Token type',\n          enum: [            'Bearer'\n          ]\n        },\n        refresh_token: {\n          type: 'string',\n          description: 'Refresh token (if applicable)'\n        },\n        scope: {\n          type: 'string',\n          description: 'Space-separated list of granted scopes'\n        }\n      },\n      required: [        'access_token',\n        'expires_in',\n        'token_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      grant_type: {
        type: 'string',
        description: 'OAuth 2.0 grant type',
        enum: ['client_credentials', 'authorization_code', 'refresh_token'],
      },
      client_id: {
        type: 'string',
        description: 'OAuth client ID (if not using HTTP Basic auth)',
      },
      client_secret: {
        type: 'string',
        description: 'OAuth client secret (if not using HTTP Basic auth)',
      },
      code: {
        type: 'string',
        description: 'Authorization code (for authorization_code flow)',
      },
      code_verifier: {
        type: 'string',
        description: 'PKCE code verifier (for authorization_code flow)',
      },
      redirect_uri: {
        type: 'string',
        description: 'Redirect URI (for authorization_code flow)',
      },
      refresh_token: {
        type: 'string',
        description: 'Refresh token (for refresh_token flow)',
      },
      scope: {
        type: 'string',
        description: 'Space-separated list of requested scopes (for client_credentials)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['grant_type'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.oauth.token(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
