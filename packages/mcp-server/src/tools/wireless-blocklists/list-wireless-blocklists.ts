// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'wireless_blocklists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/wireless_blocklists',
  operationId: 'GetWirelessBlocklistsGateways',
};

export const tool: Tool = {
  name: 'list_wireless_blocklists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all Wireless Blocklists belonging to the user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/wireless_blocklist'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    wireless_blocklist: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        name: {\n          type: 'string',\n          description: 'The wireless blocklist name.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of the wireless blocklist.',\n          enum: [            'country',\n            'mcc',\n            'plmn'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        },\n        values: {\n          type: 'array',\n          description: 'Values to block. The values here depend on the `type` of Wireless Blocklist.',\n          items: {\n            type: 'string',\n            description: 'ISO 3166-1 Alpha-2 Country Code.'\n          }\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'filter[name]': {
        type: 'string',
        description: 'The name of the Wireless Blocklist.',
      },
      'filter[type]': {
        type: 'string',
        description: 'When the Private Wireless Gateway was last updated.',
      },
      'filter[values]': {
        type: 'string',
        description: 'Values to filter on (inclusive).',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.wirelessBlocklists.list(body)));
};

export default { metadata, tool, handler };
