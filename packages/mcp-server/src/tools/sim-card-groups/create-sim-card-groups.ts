// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sim_card_groups',
  operationId: 'CreateSimCardGroup',
};

export const tool: Tool = {
  name: 'create_sim_card_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new SIM card group object\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sim_card_group_create_response',\n  $defs: {\n    sim_card_group_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/sim_card_group'\n        }\n      }\n    },\n    sim_card_group: {\n      type: 'object',\n      title: 'SIMCardGroup',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        consumed_data: {\n          $ref: '#/$defs/consumed_data'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        data_limit: {\n          type: 'object',\n          description: 'Upper limit on the amount of data the SIM cards, within the group, can use.',\n          properties: {\n            amount: {\n              type: 'string'\n            },\n            unit: {\n              type: 'string'\n            }\n          }\n        },\n        default: {\n          type: 'boolean',\n          description: 'Indicates whether the SIM card group is the users default group.<br/>The default group is created for the user and can not be removed.'\n        },\n        name: {\n          type: 'string',\n          description: 'A user friendly name for the SIM card group.'\n        },\n        private_wireless_gateway_id: {\n          type: 'string',\n          description: 'The identification of the related Private Wireless Gateway resource.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        },\n        wireless_blocklist_id: {\n          type: 'string',\n          description: 'The identification of the related Wireless Blocklist resource.'\n        }\n      }\n    },\n    consumed_data: {\n      type: 'object',\n      title: 'ConsumedData',\n      description: 'Represents the amount of data consumed.',\n      properties: {\n        amount: {\n          type: 'string'\n        },\n        unit: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'A user friendly name for the SIM card group.',
      },
      data_limit: {
        type: 'object',
        description: 'Upper limit on the amount of data the SIM cards, within the group, can use.',
        properties: {
          amount: {
            type: 'string',
          },
          unit: {
            type: 'string',
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.simCardGroups.create(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
