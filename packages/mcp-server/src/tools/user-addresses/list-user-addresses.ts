// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'user_addresses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user_addresses',
  operationId: 'FindUserAddress',
};

export const tool: Tool = {
  name: 'list_user_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your user addresses.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_address_list_response',\n  $defs: {\n    user_address_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user_address'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    user_address: {\n      type: 'object',\n      title: 'UserAddress',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the user address.'\n        },\n        administrative_area: {\n          type: 'string',\n          description: 'The locality of the user address. For US addresses, this corresponds to the state of the address.'\n        },\n        borough: {\n          type: 'string',\n          description: 'The borough of the user address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        business_name: {\n          type: 'string',\n          description: 'The business name associated with the user address.'\n        },\n        country_code: {\n          type: 'string',\n          description: 'The two-character (ISO 3166-1 alpha-2) country code of the user address.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        customer_reference: {\n          type: 'string',\n          description: 'A customer reference string for customer look ups.'\n        },\n        extended_address: {\n          type: 'string',\n          description: 'Additional street address information about the user address such as, but not limited to, unit number or apartment number.'\n        },\n        first_name: {\n          type: 'string',\n          description: 'The first name associated with the user address.'\n        },\n        last_name: {\n          type: 'string',\n          description: 'The last name associated with the user address.'\n        },\n        locality: {\n          type: 'string',\n          description: 'The locality of the user address. For US addresses, this corresponds to the city of the address.'\n        },\n        neighborhood: {\n          type: 'string',\n          description: 'The neighborhood of the user address. This field is not used for addresses in the US but is used for some international addresses.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The phone number associated with the user address.'\n        },\n        postal_code: {\n          type: 'string',\n          description: 'The postal code of the user address.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        street_address: {\n          type: 'string',\n          description: 'The primary street address information about the user address.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[customer_reference][eq], filter[customer_reference][contains], filter[street_address][contains]',
        properties: {
          customer_reference: {
            type: 'object',
            description:
              'Filter user addresses via the customer reference. Supports both exact matching (eq) and partial matching (contains). Matching is not case-sensitive.',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, user addresses with <code>customer_reference</code> containing the given value will be returned. Matching is not case-sensitive.',
              },
              eq: {
                type: 'string',
                description:
                  'Filter user addresses via exact customer reference match. Matching is not case-sensitive.',
              },
            },
          },
          street_address: {
            type: 'object',
            description:
              'Filter user addresses via street address. Supports partial matching (contains). Matching is not case-sensitive.',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, user addresses with <code>street_address</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.userAddresses.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
