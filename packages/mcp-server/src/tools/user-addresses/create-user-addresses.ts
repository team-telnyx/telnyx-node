// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'user_addresses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user_addresses',
  operationId: 'CreateUserAddress',
};

export const tool: Tool = {
  name: 'create_user_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a user address.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/user_address'\n    }\n  },\n  $defs: {\n    user_address: {\n      type: 'object',\n      title: 'UserAddress',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the user address.'\n        },\n        administrative_area: {\n          type: 'string',\n          description: 'The locality of the user address. For US addresses, this corresponds to the state of the address.'\n        },\n        borough: {\n          type: 'string',\n          description: 'The borough of the user address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        business_name: {\n          type: 'string',\n          description: 'The business name associated with the user address.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'The two-character (ISO 3166-1 alpha-2) country code of the user address.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        extended_address: {\n          type: 'string',\n          description: 'Additional street address information about the user address such as, but not limited to, unit number or apartment number.'\n        },\n        first_name: {\n          type: 'string',\n          description: 'The first name associated with the user address.'\n        },\n        last_name: {\n          type: 'string',\n          description: 'The last name associated with the user address.'\n        },\n        locality: {\n          type: 'string',\n          description: 'The locality of the user address. For US addresses, this corresponds to the city of the address.'\n        },\n        neighborhood: {\n          type: 'string',\n          description: 'The neighborhood of the user address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The phone number associated with the user address.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code of the user address.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        street_address: {\n          type: 'string',\n          description: 'The primary street address information about the user address.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      business_name: {
        type: 'string',
        description: 'The business name associated with the user address.',
      },
      country_code: {
        type: 'string',
        description: 'The two-character (ISO 3166-1 alpha-2) country code of the user address.',
      },
      first_name: {
        type: 'string',
        description: 'The first name associated with the user address.',
      },
      last_name: {
        type: 'string',
        description: 'The last name associated with the user address.',
      },
      locality: {
        type: 'string',
        description:
          'The locality of the user address. For US addresses, this corresponds to the city of the address.',
      },
      street_address: {
        type: 'string',
        description: 'The primary street address information about the user address.',
      },
      administrative_area: {
        type: 'string',
        description:
          'The locality of the user address. For US addresses, this corresponds to the state of the address.',
      },
      borough: {
        type: 'string',
        description:
          'The borough of the user address. This field is not used for addresses in the US but is used for some international addresses.',
      },
      customer_reference: {
        type: 'string',
        description: 'A customer reference string for customer look ups.',
      },
      extended_address: {
        type: 'string',
        description:
          'Additional street address information about the user address such as, but not limited to, unit number or apartment number.',
      },
      neighborhood: {
        type: 'string',
        description:
          'The neighborhood of the user address. This field is not used for addresses in the US but is used for some international addresses.',
      },
      phone_number: {
        type: 'string',
        description: 'The phone number associated with the user address.',
      },
      postal_code: {
        type: 'string',
        description: 'The postal code of the user address.',
      },
      skip_address_verification: {
        type: 'string',
        description:
          'An optional boolean value specifying if verification of the address should be skipped or not. UserAddresses are generally used for shipping addresses, and failure to validate your shipping address will likely result in a failure to deliver SIM cards or other items ordered from Telnyx. Do not use this parameter unless you are sure that the address is correct even though it cannot be validated. If this is set to any value other than true, verification of the address will be attempted, and the user address will not be allowed if verification fails. If verification fails but suggested values are available that might make the address correct, they will be present in the response as well. If this value is set to true, then the verification will not be attempted. Defaults to false (verification will be performed).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['business_name', 'country_code', 'first_name', 'last_name', 'locality', 'street_address'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.userAddresses.create(body)));
};

export default { metadata, tool, handler };
