// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/reports/mdrs',
  operationId: 'GetPaginatedMdrs',
};

export const tool: Tool = {
  name: 'list_mdrs_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch all Mdr records \n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/report_list_mdrs_response',\n  $defs: {\n    report_list_mdrs_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Id of message detail record'\n              },\n              cld: {\n                type: 'string',\n                description: 'The destination number for a call, or the callee'\n              },\n              cli: {\n                type: 'string',\n                description: 'The number associated with the person initiating the call, or the caller'\n              },\n              cost: {\n                type: 'string',\n                description: 'Final cost. Cost is calculated as rate * parts'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Message sent time',\n                format: 'date-time'\n              },\n              currency: {\n                type: 'string',\n                description: 'Currency of the rate and cost',\n                enum: [                  'AUD',\n                  'CAD',\n                  'EUR',\n                  'GBP',\n                  'USD'\n                ]\n              },\n              direction: {\n                type: 'string',\n                description: 'Direction of message - inbound or outbound.'\n              },\n              message_type: {\n                type: 'string',\n                description: 'Type of message',\n                enum: [                  'SMS',\n                  'MMS'\n                ]\n              },\n              parts: {\n                type: 'number',\n                description: 'Number of parts this message has. Max number of character is 160. If message contains more characters then that it will be broken down in multiple parts'\n              },\n              profile_name: {\n                type: 'string',\n                description: 'Configured profile name. New profiles can be created and configured on Telnyx portal'\n              },\n              rate: {\n                type: 'string',\n                description: 'Rate applied to the message'\n              },\n              record_type: {\n                type: 'string'\n              },\n              status: {\n                type: 'string',\n                description: 'Message status',\n                enum: [                  'GW_TIMEOUT',\n                  'DELIVERED',\n                  'DLR_UNCONFIRMED',\n                  'DLR_TIMEOUT',\n                  'RECEIVED',\n                  'GW_REJECT',\n                  'FAILED'\n                ]\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Message uuid',
      },
      cld: {
        type: 'string',
        description: 'Destination number',
      },
      cli: {
        type: 'string',
        description: 'Origination number',
      },
      direction: {
        type: 'string',
        description: 'Direction (inbound or outbound)',
        enum: ['INBOUND', 'OUTBOUND'],
      },
      end_date: {
        type: 'string',
        description: 'Pagination end date',
      },
      message_type: {
        type: 'string',
        description: 'Type of message',
        enum: ['SMS', 'MMS'],
      },
      profile: {
        type: 'string',
        description: 'Name of the profile',
      },
      start_date: {
        type: 'string',
        description: 'Pagination start date',
      },
      status: {
        type: 'string',
        description: 'Message status',
        enum: [
          'GW_TIMEOUT',
          'DELIVERED',
          'DLR_UNCONFIRMED',
          'DLR_TIMEOUT',
          'RECEIVED',
          'GW_REJECT',
          'FAILED',
        ],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.reports.listMdrs(body)));
};

export default { metadata, tool, handler };
