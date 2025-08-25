// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_card_groups.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sim_card_groups/{id}/actions/set_private_wireless_gateway',
  operationId: 'SetPrivateWirelessGatewayForSimCardGroup',
};

export const tool: Tool = {
  name: 'set_private_wireless_gateway_sim_card_groups_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it's moved to a different group that doesn't have a Private Wireless Gateway, it'll use Telnyx's default mobile network configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/sim_card_group_action'\n    }\n  },\n  $defs: {\n    sim_card_group_action: {\n      type: 'object',\n      title: 'SIMCardGroupAction',\n      description: 'This object represents a SIM card group action request. It allows tracking the current status of an operation that impacts the SIM card group and SIM card in it.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        settings: {\n          type: 'object',\n          description: 'A JSON object representation of the action params.',\n          properties: {\n            private_wireless_gateway_id: {\n              type: 'string',\n              description: 'The identification of the related Private Wireless Gateway resource.'\n            }\n          }\n        },\n        sim_card_group_id: {\n          type: 'string',\n          description: 'The SIM card group identification.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'in-progress',\n            'completed',\n            'failed'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Represents the type of the operation requested.',\n          enum: [            'set_private_wireless_gateway',\n            'remove_private_wireless_gateway',\n            'set_wireless_blocklist',\n            'remove_wireless_blocklist'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      private_wireless_gateway_id: {
        type: 'string',
        description: 'The identification of the related Private Wireless Gateway resource.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'private_wireless_gateway_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.simCardGroups.actions.setPrivateWirelessGateway(id, body)),
  );
};

export default { metadata, tool, handler };
