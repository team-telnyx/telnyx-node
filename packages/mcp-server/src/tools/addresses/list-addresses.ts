// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'addresses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/addresses',
  operationId: 'FindAddresses',
};

export const tool: Tool = {
  name: 'list_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your addresses.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/address_list_response',\n  $defs: {\n    address_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/address'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    address: {\n      type: 'object',\n      title: 'Address',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the address.'\n        },\n        address_book: {\n          type: 'boolean',\n          description: 'Indicates whether or not the address should be considered part of your list of addresses that appear for regular use.'\n        },\n        administrative_area: {\n          type: 'string',\n          description: 'The locality of the address. For US addresses, this corresponds to the state of the address.'\n        },\n        borough: {\n          type: 'string',\n          description: 'The borough of the address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        business_name: {\n          type: 'string',\n          description: 'The business name associated with the address. An address must have either a first last name or a business name.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'The two-character (ISO 3166-1 alpha-2) country code of the address.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        extended_address: {\n          type: 'string',\n          description: 'Additional street address information about the address such as, but not limited to, unit number or apartment number.'\n        },\n        first_name: {\n          type: 'string',\n          description: 'The first name associated with the address. An address must have either a first last name or a business name.'\n        },\n        last_name: {\n          type: 'string',\n          description: 'The last name associated with the address. An address must have either a first last name or a business name.'\n        },\n        locality: {\n          type: 'string',\n          description: 'The locality of the address. For US addresses, this corresponds to the city of the address.'\n        },\n        neighborhood: {\n          type: 'string',\n          description: 'The neighborhood of the address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The phone number associated with the address.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code of the address.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        street_address: {\n          type: 'string',\n          description: 'The primary street address information about the address.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        },\n        validate_address: {\n          type: 'boolean',\n          description: 'Indicates whether or not the address should be validated for emergency use upon creation or not. This should be left with the default value of `true` unless you have used the `/addresses/actions/validate` endpoint to validate the address separately prior to creation. If an address is not validated for emergency use upon creation and it is not valid, it will not be able to be used for emergency services.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[customer_reference][eq], filter[customer_reference][contains], filter[used_as_emergency], filter[street_address][contains], filter[address_book][eq]',
        properties: {
          address_book: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description:
                  'If present, only returns results with the <code>address_book</code> flag equal to the given value.',
              },
            },
          },
          customer_reference: {
            anyOf: [
              {
                type: 'string',
                description:
                  'If present, addresses with <code>customer_reference</code> containing the given value will be returned. Matching is not case-sensitive.',
              },
              {
                type: 'object',
                properties: {
                  contains: {
                    type: 'string',
                    description: 'Partial match for customer_reference. Matching is not case-sensitive.',
                  },
                  eq: {
                    type: 'string',
                    description: 'Exact match for customer_reference.',
                  },
                },
              },
            ],
            description:
              'If present, addresses with <code>customer_reference</code> containing the given value will be returned. Matching is not case-sensitive.',
          },
          street_address: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, addresses with <code>street_address</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.',
              },
            },
          },
          used_as_emergency: {
            type: 'string',
            description:
              "If set as 'true', only addresses used as the emergency address for at least one active phone-number will be returned. When set to 'false', the opposite happens: only addresses not used as the emergency address from phone-numbers will be returned.",
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
      sort: {
        type: 'string',
        description:
          'Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>street_address</code>: sorts the result by the\n    <code>street_address</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-street_address</code>: sorts the result by the\n    <code>street_address</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.',
        enum: ['created_at', 'first_name', 'last_name', 'business_name', 'street_address'],
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.addresses.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
