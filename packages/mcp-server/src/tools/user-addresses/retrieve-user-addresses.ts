// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'user_addresses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user_addresses/{id}',
  operationId: 'GetUserAddress',
};

export const tool: Tool = {
  name: 'retrieve_user_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the details of an existing user address.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/user_address'\n    }\n  },\n  $defs: {\n    user_address: {\n      type: 'object',\n      title: 'UserAddress',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the user address.'\n        },\n        administrative_area: {\n          type: 'string',\n          description: 'The locality of the user address. For US addresses, this corresponds to the state of the address.'\n        },\n        borough: {\n          type: 'string',\n          description: 'The borough of the user address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        business_name: {\n          type: 'string',\n          description: 'The business name associated with the user address.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'The two-character (ISO 3166-1 alpha-2) country code of the user address.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        extended_address: {\n          type: 'string',\n          description: 'Additional street address information about the user address such as, but not limited to, unit number or apartment number.'\n        },\n        first_name: {\n          type: 'string',\n          description: 'The first name associated with the user address.'\n        },\n        last_name: {\n          type: 'string',\n          description: 'The last name associated with the user address.'\n        },\n        locality: {\n          type: 'string',\n          description: 'The locality of the user address. For US addresses, this corresponds to the city of the address.'\n        },\n        neighborhood: {\n          type: 'string',\n          description: 'The neighborhood of the user address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The phone number associated with the user address.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code of the user address.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        street_address: {\n          type: 'string',\n          description: 'The primary street address information about the user address.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.userAddresses.retrieve(id)));
};

export default { metadata, tool, handler };
