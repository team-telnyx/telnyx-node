// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_cards/{id}/device_details',
  operationId: 'GetSimCardDeviceDetails',
};

export const tool: Tool = {
  name: 'get_device_details_sim_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIt returns the device details where a SIM card is currently being used.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'SIMCardDeviceDetails',\n      properties: {\n        brand_name: {\n          type: 'string',\n          description: 'Brand of the device where the SIM card is being used in.'\n        },\n        device_type: {\n          type: 'string',\n          description: 'Type of the device where the SIM card is being used in.'\n        },\n        imei: {\n          type: 'string',\n          description: 'IMEI of the device where the SIM card is being used in.'\n        },\n        model_name: {\n          type: 'string',\n          description: 'Brand of the device where the SIM card is being used in.'\n        },\n        operating_system: {\n          type: 'string',\n          description: 'Operating system of the device where the SIM card is being used in.'\n        },\n        record_type: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.simCards.getDeviceDetails(id)));
};

export default { metadata, tool, handler };
