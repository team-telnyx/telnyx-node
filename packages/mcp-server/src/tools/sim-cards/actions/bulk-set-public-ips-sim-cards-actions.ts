// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'sim_cards.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sim_cards/actions/bulk_set_public_ips',
  operationId: 'SetPublicIPsBulk',
};

export const tool: Tool = {
  name: 'bulk_set_public_ips_sim_cards_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/>\nFor each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'This object represents a bulk SIM card action. It groups SIM card actions created through a bulk endpoint under a single resource for further lookup.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        action_type: {\n          type: 'string',\n          description: 'The operation type. It can be one of the following: <br/>\\n<ul>\\n<li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card.</li>\\n</ul>',\n          enum: [            'bulk_set_public_ips'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        settings: {\n          type: 'object',\n          description: 'A JSON object representation of the bulk action payload.',\n          additionalProperties: true\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      sim_card_ids: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Identifies the resource.',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['sim_card_ids'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.simCards.actions.bulkSetPublicIPs(body)),
  );
};

export default { metadata, tool, handler };
