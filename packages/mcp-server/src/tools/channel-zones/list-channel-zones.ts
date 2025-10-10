// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'channel_zones',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/channel_zones',
  operationId: 'GetChannelZones',
};

export const tool: Tool = {
  name: 'list_channel_zones',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the non-US voice channels for your account. voice channels allow you to use Channel Billing for calls to your Telnyx phone numbers. Please check the <a href=\"https://support.telnyx.com/en/articles/8428806-global-channel-billing\">Telnyx Support Articles</a> section for full information and examples of how to utilize Channel Billing.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/channel_zone_list_response',\n  $defs: {\n    channel_zone_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Channel zone object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              channels: {\n                type: 'integer'\n              },\n              countries: {\n                type: 'array',\n                description: 'List of countries (in ISO 3166-2, capitalized) members of the billing channel zone',\n                items: {\n                  type: 'string'\n                }\n              },\n              name: {\n                type: 'string'\n              },\n              record_type: {\n                type: 'string',\n                enum: [                  'channel_zone'\n                ]\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date of when the channel zone was created'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date of when the channel zone was updated'\n              }\n            },\n            required: [              'id',\n              'channels',\n              'countries',\n              'name',\n              'record_type'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.channelZones.list(body)));
};

export default { metadata, tool, handler };
