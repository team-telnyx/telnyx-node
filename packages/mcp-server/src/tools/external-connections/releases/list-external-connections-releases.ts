// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'external_connections.releases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/{id}/releases',
  operationId: 'ListExternalConnectionReleases',
};

export const tool: Tool = {
  name: 'list_external_connections_releases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your Releases for the given external connection. These are automatically created when you change the `connection_id` of a phone number that is currently on Microsoft Teams.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Releases Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'Phone Number Release',\n        properties: {\n          created_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was created.'\n          },\n          error_message: {\n            type: 'string',\n            description: 'A message set if there is an error with the upload process.'\n          },\n          status: {\n            type: 'string',\n            description: 'Represents the status of the release on Microsoft Teams.',\n            enum: [              'pending_upload',\n              'pending',\n              'in_progress',\n              'complete',\n              'failed',\n              'expired',\n              'unknown'\n            ]\n          },\n          telephone_numbers: {\n            type: 'array',\n            items: {\n              type: 'object',\n              title: 'TnReleaseEntry',\n              properties: {\n                number_id: {\n                  type: 'string',\n                  description: 'Phone number ID from the Telnyx API.'\n                },\n                phone_number: {\n                  type: 'string',\n                  description: 'Phone number in E164 format.'\n                }\n              }\n            }\n          },\n          tenant_id: {\n            type: 'string'\n          },\n          ticket_id: {\n            type: 'string',\n            title: 'UUID',\n            description: 'Uniquely identifies the resource.'\n          }\n        }\n      }\n    },\n    meta: {\n      $ref: '#/$defs/external_voice_integrations_pagination_meta'\n    }\n  },\n  $defs: {\n    external_voice_integrations_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Filter parameter for releases (deepObject style). Supports filtering by status, civic_address_id, location_id, and phone_number with eq/contains operations.',
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
            description:
              "Phone number filter operations. Use 'eq' for exact matches or 'contains' for partial matches.",
            properties: {
              contains: {
                type: 'string',
                description: 'The partial phone number to filter by. Requires 3-15 digits.',
              },
              eq: {
                type: 'string',
                description: 'The phone number to filter by',
              },
            },
          },
          status: {
            type: 'object',
            properties: {
              eq: {
                type: 'array',
                description: 'The status of the release to filter by',
                items: {
                  type: 'string',
                  enum: [
                    'pending_upload',
                    'pending',
                    'in_progress',
                    'complete',
                    'failed',
                    'expired',
                    'unknown',
                  ],
                },
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
    await maybeFilter(jq_filter, await client.externalConnections.releases.list(id, body)),
  );
};

export default { metadata, tool, handler };
