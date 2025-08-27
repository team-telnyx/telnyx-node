// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_groups.actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_card_group_actions',
  operationId: 'GetSimCardGroupActions',
};

export const tool: Tool = {
  name: 'list_sim_card_groups_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/sim_card_group_action'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    sim_card_group_action: {\n      type: 'object',\n      title: 'SIMCardGroupAction',\n      description: 'This object represents a SIM card group action request. It allows tracking the current status of an operation that impacts the SIM card group and SIM card in it.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        settings: {\n          type: 'object',\n          description: 'A JSON object representation of the action params.',\n          properties: {\n            private_wireless_gateway_id: {\n              type: 'string',\n              description: 'The identification of the related Private Wireless Gateway resource.'\n            }\n          }\n        },\n        sim_card_group_id: {\n          type: 'string',\n          description: 'The SIM card group identification.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'in-progress',\n            'completed',\n            'failed'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Represents the type of the operation requested.',\n          enum: [            'set_private_wireless_gateway',\n            'remove_private_wireless_gateway',\n            'set_wireless_blocklist',\n            'remove_wireless_blocklist'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[sim_card_group_id]': {
        type: 'string',
        description: 'A valid SIM card group ID.',
      },
      'filter[status]': {
        type: 'string',
        description: "Filter by a specific status of the resource's lifecycle.",
        enum: ['in-progress', 'completed', 'failed'],
      },
      'filter[type]': {
        type: 'string',
        description: 'Filter by action type.',
        enum: [
          'set_private_wireless_gateway',
          'remove_private_wireless_gateway',
          'set_wireless_blocklist',
          'remove_wireless_blocklist',
        ],
      },
      'page[number]': {
        type: 'integer',
        description: 'The page number to load.',
      },
      'page[size]': {
        type: 'integer',
        description: 'The size of the page.',
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.simCardGroups.actions.list(body)));
};

export default { metadata, tool, handler };
