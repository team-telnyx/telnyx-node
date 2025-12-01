// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'payment.auto_recharge_prefs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/payment/auto_recharge_prefs',
  operationId: 'UpdateAutoRechargePrefs',
};

export const tool: Tool = {
  name: 'update_payment_auto_recharge_prefs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate payment auto recharge preferences.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/auto_recharge_pref_update_response',\n  $defs: {\n    auto_recharge_pref_update_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The unique identifier for the auto recharge preference.'\n            },\n            enabled: {\n              type: 'boolean',\n              description: 'Whether auto recharge is enabled.'\n            },\n            invoice_enabled: {\n              type: 'boolean'\n            },\n            preference: {\n              type: 'string',\n              description: 'The payment preference for auto recharge.',\n              enum: [                'credit_paypal',\n                'ach'\n              ]\n            },\n            recharge_amount: {\n              type: 'string',\n              description: 'The amount to recharge the account, the actual recharge amount will be the amount necessary to reach the threshold amount plus the recharge amount.'\n            },\n            record_type: {\n              type: 'string',\n              description: 'The record type.'\n            },\n            threshold_amount: {\n              type: 'string',\n              description: 'The threshold amount at which the account will be recharged.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      enabled: {
        type: 'boolean',
        description: 'Whether auto recharge is enabled.',
      },
      invoice_enabled: {
        type: 'boolean',
      },
      preference: {
        type: 'string',
        description: 'The payment preference for auto recharge.',
        enum: ['credit_paypal', 'ach'],
      },
      recharge_amount: {
        type: 'string',
        description:
          'The amount to recharge the account, the actual recharge amount will be the amount necessary to reach the threshold amount plus the recharge amount.',
      },
      threshold_amount: {
        type: 'string',
        description: 'The threshold amount at which the account will be recharged.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.payment.autoRechargePrefs.update(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
