// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'wireless_blocklist_values',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/wireless_blocklist_values',
  operationId: 'WirelessBlocklistsGetAll',
};

export const tool: Tool = {
  name: 'list_wireless_blocklist_values',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve all wireless blocklist values for a given blocklist type.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/wireless_blocklist_value_list_response',\n  $defs: {\n    wireless_blocklist_value_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          anyOf: [            {\n              type: 'array',\n              title: 'Country',\n              items: {\n                type: 'object',\n                title: 'Country',\n                properties: {\n                  code: {\n                    type: 'string',\n                    description: 'ISO 3166-1 Alpha-2 Country Code.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the country.'\n                  }\n                },\n                required: [                  'code',\n                  'name'\n                ]\n              }\n            },\n            {\n              type: 'array',\n              title: 'MCC',\n              items: {\n                type: 'object',\n                title: 'Mobile Country Code',\n                properties: {\n                  code: {\n                    type: 'string',\n                    description: 'Mobile Country Code.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the country.'\n                  }\n                },\n                required: [                  'code',\n                  'name'\n                ]\n              }\n            },\n            {\n              type: 'array',\n              title: 'PLMN',\n              items: {\n                type: 'object',\n                title: 'Public land mobile network',\n                properties: {\n                  code: {\n                    type: 'string',\n                    description: 'Public land mobile network code (MCC + MNC).'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the network.'\n                  }\n                },\n                required: [                  'code',\n                  'name'\n                ]\n              }\n            }\n          ]\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description:
          'The Wireless Blocklist type for which to list possible values (e.g., `country`, `mcc`, `plmn`).',
        enum: ['country', 'mcc', 'plmn'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['type'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.wirelessBlocklistValues.list(body)));
};

export default { metadata, tool, handler };
