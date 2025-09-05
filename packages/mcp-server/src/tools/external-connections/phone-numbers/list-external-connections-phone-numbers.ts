// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.phone_numbers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/{id}/phone_numbers',
  operationId: 'ListExternalConnectionPhoneNumbers',
};

export const tool: Tool = {
  name: 'list_external_connections_phone_numbers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of all active phone numbers associated with the given external connection.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List External Connection Phone Numbers Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/external_connection_phone_number'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/external_voice_integrations_pagination_meta'\n    }\n  },\n  $defs: {\n    external_connection_phone_number: {\n      type: 'object',\n      title: 'Phone number details with relation to an external connection',\n      properties: {\n        acquired_capabilities: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'The capabilities that are available for this phone number on Microsoft Teams.',\n            enum: [              'FirstPartyAppAssignment',\n              'InboundCalling',\n              'Office365',\n              'OutboundCalling',\n              'UserAssignment'\n            ]\n          }\n        },\n        civic_address_id: {\n          type: 'string',\n          description: 'Identifies the civic address assigned to the phone number.'\n        },\n        displayed_country_code: {\n          type: 'string',\n          description: 'The iso country code that will be displayed to the user when they receive a call from this phone number.'\n        },\n        location_id: {\n          type: 'string',\n          description: 'Identifies the location assigned to the phone number.'\n        },\n        number_id: {\n          type: 'string',\n          description: 'Phone number ID from the Telnyx API.'\n        },\n        telephone_number: {\n          type: 'string',\n          description: 'Phone number in E164 format.'\n        },\n        ticket_id: {\n          type: 'string',\n          title: 'UUID',\n          description: 'Uniquely identifies the resource.'\n        }\n      }\n    },\n    external_voice_integrations_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Filter parameter for phone numbers (deepObject style). Supports filtering by phone_number, civic_address_id, and location_id with eq/contains operations.',
        properties: {
          civic_address_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'The civic address ID to filter by',
              },
            },
          },
          location_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'The location ID to filter by',
              },
            },
          },
          phone_number: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description: 'The phone number to filter by (partial match)',
              },
              eq: {
                type: 'string',
                description: 'The phone number to filter by (exact match)',
              },
            },
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.phoneNumbers.list(id, body)),
  );
};

export default { metadata, tool, handler };
