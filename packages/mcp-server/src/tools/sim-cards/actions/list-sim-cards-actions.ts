// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_cards.actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_card_actions',
  operationId: 'ListSimCardActions',
};

export const tool: Tool = {
  name: 'list_sim_cards_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/sim_card_action'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    sim_card_action: {\n      type: 'object',\n      title: 'SIMCardAction',\n      description: 'This object represents a SIM card action. It allows tracking the current status of an operation that impacts the SIM card.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        action_type: {\n          type: 'string',\n          description: 'The operation type. It can be one of the following: <br/>\\n<ul>\\n <li><code>enable</code> - move the SIM card to the <code>enabled</code> status</li>\\n <li><code>enable_standby_sim_card</code> - move a SIM card previously on the <code>standby</code> status to the <code>enabled</code> status after it consumes data.</li>\\n <li><code>disable</code> - move the SIM card to the <code>disabled</code> status</li>\\n <li><code>set_standby</code> - move the SIM card to the <code>standby</code> status</li>\\n </ul>',\n          enum: [            'enable',\n            'enable_standby_sim_card',\n            'disable',\n            'set_standby'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        settings: {\n          type: 'object',\n          description: 'A JSON object representation of the action params.',\n          additionalProperties: true\n        },\n        sim_card_id: {\n          type: 'string',\n          description: 'The related SIM card identifier.'\n        },\n        status: {\n          type: 'object',\n          properties: {\n            reason: {\n              type: 'string',\n              description: 'It describes why the SIM card action is in the current status. This will be <code>null</code> for self-explanatory statuses, such as <code>in-progress</code> and <code>completed</code> but will include further information on statuses like <code>interrupted</code> and <code>failed</code>.'\n            },\n            value: {\n              type: 'string',\n              description: 'The current status of the SIM card action.',\n              enum: [                'in-progress',\n                'completed',\n                'failed',\n                'interrupted'\n              ]\n            }\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for SIM card actions (deepObject style). Originally: filter[sim_card_id], filter[status], filter[bulk_sim_card_action_id], filter[action_type]',
        properties: {
          action_type: {
            type: 'string',
            description: 'Filter by action type.',
            enum: [
              'enable',
              'enable_standby_sim_card',
              'disable',
              'set_standby',
              'remove_public_ip',
              'set_public_ip',
            ],
          },
          bulk_sim_card_action_id: {
            type: 'string',
            description: 'Filter by a bulk SIM card action ID.',
          },
          sim_card_id: {
            type: 'string',
            description: 'A valid SIM card ID.',
          },
          status: {
            type: 'string',
            description: "Filter by a specific status of the resource's lifecycle.",
            enum: ['in-progress', 'completed', 'failed'],
          },
        },
      },
      page: {
        type: 'object',
        description:
          'Consolidated pagination parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load.',
          },
          size: {
            type: 'integer',
            description: 'The size of the page.',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.simCards.actions.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
