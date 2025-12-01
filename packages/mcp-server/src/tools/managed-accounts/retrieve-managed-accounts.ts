// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'managed_accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/managed_accounts/{id}',
  operationId: 'RetrieveManagedAccount',
};

export const tool: Tool = {
  name: 'retrieve_managed_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the details of a single managed account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/managed_account_retrieve_response',\n  $defs: {\n    managed_account_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/managed_account'\n        }\n      }\n    },\n    managed_account: {\n      type: 'object',\n      title: 'ManagedAccount',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the managed account.'\n        },\n        api_key: {\n          type: 'string',\n          description: 'The managed account\\'s V2 API access key'\n        },\n        api_token: {\n          type: 'string',\n          description: 'The managed account\\'s V1 API token'\n        },\n        api_user: {\n          type: 'string',\n          description: 'The manager account\\'s email, which serves as the V1 API user identifier'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        email: {\n          type: 'string',\n          description: 'The managed account\\'s email.'\n        },\n        manager_account_id: {\n          type: 'string',\n          description: 'The ID of the manager account associated with the managed account.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'managed_account'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        },\n        balance: {\n          $ref: '#/$defs/managed_account_balance'\n        },\n        managed_account_allow_custom_pricing: {\n          type: 'boolean',\n          description: 'Boolean value that indicates if the managed account is able to have custom pricing set for it or not. If false, uses the pricing of the manager account. Defaults to false. There may be time lag between when the value is changed and pricing changes take effect.'\n        },\n        organization_name: {\n          type: 'string',\n          description: 'The organization the managed account is associated with.'\n        },\n        rollup_billing: {\n          type: 'boolean',\n          description: 'Boolean value that indicates if the billing information and charges to the managed account \"roll up\" to the manager account. If true, the managed account will not have its own balance and will use the shared balance with the manager account. This value cannot be changed after account creation without going through Telnyx support as changes require manual updates to the account ledger. Defaults to false.'\n        }\n      },\n      required: [        'id',\n        'api_key',\n        'api_token',\n        'api_user',\n        'created_at',\n        'email',\n        'manager_account_id',\n        'record_type',\n        'updated_at'\n      ]\n    },\n    managed_account_balance: {\n      type: 'object',\n      properties: {\n        available_credit: {\n          type: 'string',\n          description: 'Available amount to spend (balance + credit limit)'\n        },\n        balance: {\n          type: 'string',\n          description: 'The account\\'s current balance.'\n        },\n        credit_limit: {\n          type: 'string',\n          description: 'The account\\'s credit limit.'\n        },\n        currency: {\n          type: 'string',\n          description: 'The ISO 4217 currency identifier.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.',\n          enum: [            'balance'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.managedAccounts.retrieve(id)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
