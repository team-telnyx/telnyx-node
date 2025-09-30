// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'oauth',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth/authorize',
};

export const tool: Tool = {
  name: 'authorize_oauth',
  description: 'OAuth 2.0 authorization endpoint for the authorization code flow',
  inputSchema: {
    type: 'object',
    properties: {
      client_id: {
        type: 'string',
        description: 'OAuth client identifier',
      },
      redirect_uri: {
        type: 'string',
        description: 'Redirect URI',
      },
      response_type: {
        type: 'string',
        description: 'OAuth response type',
        enum: ['code'],
      },
      code_challenge: {
        type: 'string',
        description: 'PKCE code challenge',
      },
      code_challenge_method: {
        type: 'string',
        description: 'PKCE code challenge method',
        enum: ['plain', 'S256'],
      },
      scope: {
        type: 'string',
        description: 'Space-separated list of requested scopes',
      },
      state: {
        type: 'string',
        description: 'State parameter for CSRF protection',
      },
    },
    required: ['client_id', 'redirect_uri', 'response_type'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.oauth.authorize(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
