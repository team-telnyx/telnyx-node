// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'wireless',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/wireless/regions',
  operationId: 'WirelessRegionsGetAll',
};

export const tool: Tool = {
  name: 'retrieve_regions_wireless',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all wireless regions for the given product.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Region',\n        properties: {\n          code: {\n            type: 'string',\n            description: 'The unique code of the region.'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the region.'\n          },\n          inserted_at: {\n            type: 'string',\n            description: 'Timestamp when the region was inserted.',\n            format: 'date-time'\n          },\n          updated_at: {\n            type: 'string',\n            description: 'Timestamp when the region was last updated.',\n            format: 'date-time'\n          }\n        },\n        required: [          'code',\n          'name'\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      product: {
        type: 'string',
        description:
          "The product for which to list regions (e.g., 'public_ips', 'private_wireless_gateways').",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['product'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.wireless.retrieveRegions(body)));
};

export default { metadata, tool, handler };
