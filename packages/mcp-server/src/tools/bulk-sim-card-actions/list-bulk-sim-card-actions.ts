// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'bulk_sim_card_actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/bulk_sim_card_actions',
  operationId: 'ListBulkSimCardActions',
};

export const tool: Tool = {
  name: 'list_bulk_sim_card_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/bulk_sim_card_action_list_response',\n  $defs: {\n    bulk_sim_card_action_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the resource.'\n              },\n              action_type: {\n                type: 'string',\n                description: 'The operation type. It can be one of the following: <br/>\\n<ul>\\n<li><code>bulk_set_public_ips</code> - set a public IP for each specified SIM card.</li>\\n</ul>',\n                enum: [                  'bulk_set_public_ips'\n                ]\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n              },\n              record_type: {\n                type: 'string'\n              },\n              settings: {\n                type: 'object',\n                description: 'A JSON object representation of the bulk action payload.',\n                additionalProperties: true\n              },\n              sim_card_actions_summary: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    count: {\n                      type: 'integer'\n                    },\n                    status: {\n                      type: 'string',\n                      enum: [                        'in-progress',\n                        'completed',\n                        'failed',\n                        'interrupted'\n                      ]\n                    }\n                  }\n                }\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[action_type]': {
        type: 'string',
        description: 'Filter by action type.',
        enum: ['bulk_set_public_ips'],
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.bulkSimCardActions.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
