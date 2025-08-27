// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'dynamic_emergency_endpoints',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dynamic_emergency_endpoints',
  operationId: 'ListDynamicEmergencyEndpoints',
};

export const tool: Tool = {
  name: 'list_dynamic_emergency_endpoints',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the dynamic emergency endpoints according to filters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/dynamic_emergency_endpoint'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/metadata'\n    }\n  },\n  $defs: {\n    dynamic_emergency_endpoint: {\n      type: 'object',\n      properties: {\n        callback_number: {\n          type: 'string'\n        },\n        caller_name: {\n          type: 'string'\n        },\n        dynamic_emergency_address_id: {\n          type: 'string',\n          description: 'An id of a currently active dynamic emergency location.'\n        },\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was created'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        sip_from_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of dynamic emergency address',\n          enum: [            'pending',\n            'activated',\n            'rejected'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was last updated'\n        }\n      },\n      required: [        'callback_number',\n        'caller_name',\n        'dynamic_emergency_address_id'\n      ]\n    },\n    metadata: {\n      type: 'object',\n      title: 'Metadata',\n      properties: {\n        page_number: {\n          type: 'number',\n          description: 'Current Page based on pagination settings (included when defaults are used.)'\n        },\n        page_size: {\n          type: 'number',\n          description: 'Number of results to return per page based on pagination settings (included when defaults are used.)'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages based on pagination settings'\n        },\n        total_results: {\n          type: 'number',\n          description: 'Total number of results'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[status], filter[country_code]',
        properties: {
          country_code: {
            type: 'string',
            description: 'Filter by country code.',
          },
          status: {
            type: 'string',
            description: 'Filter by status.',
            enum: ['pending', 'activated', 'rejected'],
          },
        },
      },
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.dynamicEmergencyEndpoints.list(body)));
};

export default { metadata, tool, handler };
