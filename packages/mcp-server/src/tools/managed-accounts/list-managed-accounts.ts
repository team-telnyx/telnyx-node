// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'managed_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/managed_accounts',
  operationId: 'ListManagedAccounts',
};

export const tool: Tool = {
  name: 'list_managed_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'ManagedAccount',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Uniquely identifies the managed account.'\n          },\n          api_user: {\n            type: 'string',\n            description: 'The manager account\\'s email, which serves as the V1 API user identifier'\n          },\n          created_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was created.'\n          },\n          email: {\n            type: 'string',\n            description: 'The managed account\\'s email.'\n          },\n          manager_account_id: {\n            type: 'string',\n            description: 'The ID of the manager account associated with the managed account.'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.',\n            enum: [              'managed_account'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date indicating when the resource was updated.'\n          },\n          managed_account_allow_custom_pricing: {\n            type: 'boolean',\n            description: 'Boolean value that indicates if the managed account is able to have custom pricing set for it or not. If false, uses the pricing of the manager account. Defaults to false. There may be time lag between when the value is changed and pricing changes take effect.'\n          },\n          organization_name: {\n            type: 'string',\n            description: 'The organization the managed account is associated with.'\n          },\n          rollup_billing: {\n            type: 'boolean',\n            description: 'Boolean value that indicates if the billing information and charges to the managed account \"roll up\" to the manager account. If true, the managed account will not have its own balance and will use the shared balance with the manager account. This value cannot be changed after account creation without going through Telnyx support as changes require manual updates to the account ledger. Defaults to false.'\n          }\n        },\n        required: [          'id',\n          'api_user',\n          'created_at',\n          'email',\n          'manager_account_id',\n          'record_type',\n          'updated_at'\n        ]\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[email][contains], filter[email][eq], filter[organization_name][contains], filter[organization_name][eq]',
        properties: {
          email: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.',
              },
              eq: {
                type: 'string',
                description:
                  'If present, only returns results with the <code>email</code> matching exactly the value given.',
              },
            },
          },
          organization_name: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, only returns results with the <code>organization_name</code> containing the given value. Matching is not case-sensitive. Requires at least three characters.',
              },
              eq: {
                type: 'string',
                description:
                  'If present, only returns results with the <code>organization_name</code> matching exactly the value given.',
              },
            },
          },
        },
      },
      include_cancelled_accounts: {
        type: 'boolean',
        description: 'Specifies if cancelled accounts should be included in the results.',
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
          'Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>email</code>: sorts the result by the\n    <code>email</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-email</code>: sorts the result by the\n    <code>email</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.',
        enum: ['created_at', 'email'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.managedAccounts.list(body)));
};

export default { metadata, tool, handler };
