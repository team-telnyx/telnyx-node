// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.civic_addresses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/{id}/civic_addresses/{address_id}',
  operationId: 'GetExternalConnectionCivicAddress',
};

export const tool: Tool = {
  name: 'retrieve_external_connections_civic_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn the details of an existing Civic Address with its Locations inside the 'data' attribute of the response.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/civic_address_retrieve_response',\n  $defs: {\n    civic_address_retrieve_response: {\n      type: 'object',\n      title: 'Get Civic Address Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Civic Address',\n          properties: {\n            id: {\n              type: 'string',\n              title: 'UUID',\n              description: 'Uniquely identifies the resource.'\n            },\n            city_or_town: {\n              type: 'string'\n            },\n            city_or_town_alias: {\n              type: 'string'\n            },\n            company_name: {\n              type: 'string'\n            },\n            country: {\n              type: 'string'\n            },\n            country_or_district: {\n              type: 'string'\n            },\n            default_location_id: {\n              type: 'string',\n              description: 'Identifies what is the default location in the list of locations.'\n            },\n            description: {\n              type: 'string'\n            },\n            house_number: {\n              type: 'string'\n            },\n            house_number_suffix: {\n              type: 'string'\n            },\n            locations: {\n              type: 'array',\n              items: {\n                type: 'object',\n                title: 'Location',\n                properties: {\n                  id: {\n                    type: 'string',\n                    title: 'UUID',\n                    description: 'Uniquely identifies the resource.'\n                  },\n                  additional_info: {\n                    type: 'string'\n                  },\n                  description: {\n                    type: 'string'\n                  },\n                  is_default: {\n                    type: 'boolean',\n                    description: 'Represents whether the location is the default or not.'\n                  }\n                }\n              }\n            },\n            postal_or_zip_code: {\n              type: 'string'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.'\n            },\n            state_or_province: {\n              type: 'string'\n            },\n            street_name: {\n              type: 'string'\n            },\n            street_suffix: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      address_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'address_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { address_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.civicAddresses.retrieve(address_id, body)),
  );
};

export default { metadata, tool, handler };
