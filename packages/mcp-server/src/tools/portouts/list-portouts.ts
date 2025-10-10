// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts',
  operationId: 'ListPortoutRequest',
};

export const tool: Tool = {
  name: 'list_portouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the portout requests according to filters\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/portout_list_response',\n  $defs: {\n    portout_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/portout_details'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/metadata'\n        }\n      }\n    },\n    portout_details: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        already_ported: {\n          type: 'boolean',\n          description: 'Is true when the number is already ported'\n        },\n        authorized_name: {\n          type: 'string',\n          description: 'Name of person authorizing the porting order'\n        },\n        carrier_name: {\n          type: 'string',\n          description: 'Carrier the number will be ported out to'\n        },\n        city: {\n          type: 'string',\n          description: 'City or municipality of billing address'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the portout was created'\n        },\n        current_carrier: {\n          type: 'string',\n          description: 'The current carrier'\n        },\n        end_user_name: {\n          type: 'string',\n          description: 'Person name or company name requesting the port'\n        },\n        foc_date: {\n          type: 'string',\n          description: 'ISO 8601 formatted Date/Time of the FOC date'\n        },\n        host_messaging: {\n          type: 'boolean',\n          description: 'Indicates whether messaging services should be maintained with Telnyx after the port out completes'\n        },\n        inserted_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the portout was created'\n        },\n        lsr: {\n          type: 'array',\n          description: 'The Local Service Request',\n          items: {\n            type: 'string',\n            description: 'A link to the Local Service Request'\n          }\n        },\n        phone_numbers: {\n          type: 'array',\n          description: 'Phone numbers associated with this portout',\n          items: {\n            type: 'string',\n            description: 'E164 formatted phone number'\n          }\n        },\n        pon: {\n          type: 'string',\n          description: 'Port order number assigned by the carrier the number will be ported out to'\n        },\n        reason: {\n          type: 'string',\n          description: 'The reason why the order is being rejected by the user. If the order is authorized, this field can be left null'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        rejection_code: {\n          type: 'integer',\n          description: 'The rejection code for one of the valid rejections to reject a port out order'\n        },\n        requested_foc_date: {\n          type: 'string',\n          description: 'ISO 8601 formatted Date/Time of the user requested FOC date'\n        },\n        service_address: {\n          type: 'string',\n          description: 'First line of billing address (street address)'\n        },\n        spid: {\n          type: 'string',\n          description: 'New service provider spid'\n        },\n        state: {\n          type: 'string',\n          description: 'State, province, or similar of billing address'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of portout request',\n          enum: [            'pending',\n            'authorized',\n            'ported',\n            'rejected',\n            'rejected-pending',\n            'canceled'\n          ]\n        },\n        support_key: {\n          type: 'string',\n          description: 'A key to reference this port out request when contacting Telnyx customer support'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the portout was last updated'\n        },\n        user_id: {\n          type: 'string',\n          description: 'Identifies the user (or organization) who requested the port out'\n        },\n        vendor: {\n          type: 'string',\n          description: 'Telnyx partner providing network coverage'\n        },\n        zip: {\n          type: 'string',\n          description: 'Postal Code of billing address'\n        }\n      }\n    },\n    metadata: {\n      type: 'object',\n      title: 'Metadata',\n      properties: {\n        page_number: {\n          type: 'number',\n          description: 'Current Page based on pagination settings (included when defaults are used.)'\n        },\n        page_size: {\n          type: 'number',\n          description: 'Number of results to return per page based on pagination settings (included when defaults are used.)'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages based on pagination settings'\n        },\n        total_results: {\n          type: 'number',\n          description: 'Total number of results'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[carrier_name], filter[country_code], filter[country_code_in], filter[foc_date], filter[inserted_at], filter[phone_number], filter[pon], filter[ported_out_at], filter[spid], filter[status], filter[status_in], filter[support_key]',
        properties: {
          carrier_name: {
            type: 'string',
            description: 'Filter by new carrier name.',
          },
          country_code: {
            type: 'string',
            description: 'Filter by 2-letter country code',
          },
          country_code_in: {
            type: 'array',
            description: 'Filter by a list of 2-letter country codes',
            items: {
              type: 'string',
            },
          },
          foc_date: {
            type: 'string',
            description: 'Filter by foc_date. Matches all portouts with the same date',
            format: 'date-time',
          },
          inserted_at: {
            type: 'object',
            description: 'Filter by inserted_at date range using nested operations',
            properties: {
              gte: {
                type: 'string',
                description: 'Filter by inserted_at date greater than or equal.',
                format: 'date-time',
              },
              lte: {
                type: 'string',
                description: 'Filter by inserted_at date less than or equal.',
                format: 'date-time',
              },
            },
          },
          phone_number: {
            type: 'string',
            description:
              'Filter by a phone number on the portout. Matches all portouts with the phone number',
          },
          pon: {
            type: 'string',
            description: 'Filter by Port Order Number (PON).',
          },
          ported_out_at: {
            type: 'object',
            description: 'Filter by ported_out_at date range using nested operations',
            properties: {
              gte: {
                type: 'string',
                description: 'Filter by ported_out_at date greater than or equal.',
                format: 'date-time',
              },
              lte: {
                type: 'string',
                description: 'Filter by ported_out_at date less than or equal.',
                format: 'date-time',
              },
            },
          },
          spid: {
            type: 'string',
            description: 'Filter by new carrier spid.',
          },
          status: {
            type: 'string',
            description: 'Filter by portout status.',
            enum: ['pending', 'authorized', 'ported', 'rejected', 'rejected-pending', 'canceled'],
          },
          status_in: {
            type: 'array',
            description: 'Filter by a list of portout statuses',
            items: {
              type: 'string',
              enum: ['pending', 'authorized', 'ported', 'rejected', 'rejected-pending', 'canceled'],
            },
          },
          support_key: {
            type: 'string',
            description: "Filter by the portout's support_key",
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.portouts.list(body)));
};

export default { metadata, tool, handler };
