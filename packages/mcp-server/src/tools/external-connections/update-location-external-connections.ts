// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'external_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/external_connections/{id}/locations/{location_id}',
  operationId: 'updateLocation',
};

export const tool: Tool = {
  name: 'update_location_external_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a location's static emergency address\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        accepted_address_suggestions: {\n          type: 'boolean'\n        },\n        location_id: {\n          type: 'string'\n        },\n        static_emergency_address_id: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      location_id: {
        type: 'string',
      },
      static_emergency_address_id: {
        type: 'string',
        description: 'A new static emergency address ID to update the location with',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'location_id', 'static_emergency_address_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { location_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.updateLocation(location_id, body)),
  );
};

export default { metadata, tool, handler };
