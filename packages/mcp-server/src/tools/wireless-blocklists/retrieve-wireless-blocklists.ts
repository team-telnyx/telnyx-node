// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'wireless_blocklists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/wireless_blocklists/{id}',
  operationId: 'GetWirelessBlocklist',
};

export const tool: Tool = {
  name: 'retrieve_wireless_blocklists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about a Wireless Blocklist.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/wireless_blocklist_retrieve_response',\n  $defs: {\n    wireless_blocklist_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/wireless_blocklist'\n        }\n      }\n    },\n    wireless_blocklist: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        name: {\n          type: 'string',\n          description: 'The wireless blocklist name.'\n        },\n        record_type: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of the wireless blocklist.',\n          enum: [            'country',\n            'mcc',\n            'plmn'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        },\n        values: {\n          type: 'array',\n          description: 'Values to block. The values here depend on the `type` of Wireless Blocklist.',\n          items: {\n            type: 'string',\n            description: 'ISO 3166-1 Alpha-2 Country Code.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.wirelessBlocklists.retrieve(id)));
};

export default { metadata, tool, handler };
