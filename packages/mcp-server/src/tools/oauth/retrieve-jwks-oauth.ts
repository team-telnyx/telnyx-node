// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'oauth',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/oauth/jwks',
};

export const tool: Tool = {
  name: 'retrieve_jwks_oauth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the JSON Web Key Set for token verification\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth_retrieve_jwks_response',\n  $defs: {\n    oauth_retrieve_jwks_response: {\n      type: 'object',\n      properties: {\n        keys: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              alg: {\n                type: 'string',\n                description: 'Algorithm'\n              },\n              kid: {\n                type: 'string',\n                description: 'Key ID'\n              },\n              kty: {\n                type: 'string',\n                description: 'Key type'\n              },\n              use: {\n                type: 'string',\n                description: 'Key use'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.oauth.retrieveJwks()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
