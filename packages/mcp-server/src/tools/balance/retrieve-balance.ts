// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'balance',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/balance',
  operationId: 'GetUserBalance',
};

export const tool: Tool = {
  name: 'retrieve_balance',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet user balance details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/balance_retrieve_response',\n  $defs: {\n    balance_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            available_credit: {\n              type: 'string',\n              description: 'Available amount to spend (balance + credit limit)'\n            },\n            balance: {\n              type: 'string',\n              description: 'The account\\'s current balance.'\n            },\n            credit_limit: {\n              type: 'string',\n              description: 'The account\\'s credit limit.'\n            },\n            currency: {\n              type: 'string',\n              description: 'The ISO 4217 currency identifier.'\n            },\n            pending: {\n              type: 'string',\n              description: 'The account’s pending amount.'\n            },\n            record_type: {\n              type: 'string',\n              description: 'Identifies the type of the resource.',\n              enum: [                'balance'\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.balance.retrieve()));
};

export default { metadata, tool, handler };
