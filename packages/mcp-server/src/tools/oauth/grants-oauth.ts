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
  httpPath: '/oauth/grants',
};

export const tool: Tool = {
  name: 'grants_oauth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an OAuth authorization grant\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/oauth_grants_response',\n  $defs: {\n    oauth_grants_response: {\n      type: 'object',\n      properties: {\n        redirect_uri: {\n          type: 'string',\n          description: 'Redirect URI with authorization code or error'\n        }\n      },\n      required: [        'redirect_uri'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      allowed: {
        type: 'boolean',
        description: 'Whether the grant is allowed',
      },
      consent_token: {
        type: 'string',
        description: 'Consent token',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['allowed', 'consent_token'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.oauth.grants(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
