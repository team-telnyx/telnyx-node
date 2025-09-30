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
  httpPath: '/oauth/introspect',
};

export const tool: Tool = {
  name: 'introspect_token_oauth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIntrospect an OAuth access token to check its validity and metadata\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    active: {\n      type: 'boolean',\n      description: 'Whether the token is active'\n    },\n    aud: {\n      type: 'string',\n      description: 'Audience'\n    },\n    client_id: {\n      type: 'string',\n      description: 'Client identifier'\n    },\n    exp: {\n      type: 'integer',\n      description: 'Expiration timestamp'\n    },\n    iat: {\n      type: 'integer',\n      description: 'Issued at timestamp'\n    },\n    iss: {\n      type: 'string',\n      description: 'Issuer'\n    },\n    scope: {\n      type: 'string',\n      description: 'Space-separated list of scopes'\n    }\n  },\n  required: [    'active'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
        description: 'The token to introspect',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['token'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.oauth.introspectToken(body)));
};

export default { metadata, tool, handler };
