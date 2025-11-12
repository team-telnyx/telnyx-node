// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'well_known',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/.well-known/oauth-protected-resource',
};

export const tool: Tool = {
  name: 'retrieve_protected_resource_metadata_well_known',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOAuth 2.0 Protected Resource Metadata for resource discovery\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/well_known_retrieve_protected_resource_metadata_response',\n  $defs: {\n    well_known_retrieve_protected_resource_metadata_response: {\n      type: 'object',\n      properties: {\n        authorization_servers: {\n          type: 'array',\n          description: 'List of authorization server URLs',\n          items: {\n            type: 'string'\n          }\n        },\n        resource: {\n          type: 'string',\n          description: 'Protected resource URL'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.wellKnown.retrieveProtectedResourceMetadata()),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
