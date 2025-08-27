// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'messaging_hosted_number_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_hosted_number_orders/eligibility_numbers_check',
  operationId: 'CheckEligibilityNumbers',
};

export const tool: Tool = {
  name: 'check_eligibility_messaging_hosted_number_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck eligibility of phone numbers for hosted messaging\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    phone_numbers: {\n      type: 'array',\n      description: 'List of phone numbers with their eligibility status.',\n      items: {\n        type: 'object',\n        properties: {\n          detail: {\n            type: 'string',\n            description: 'Detailed information about the eligibility status.'\n          },\n          eligible: {\n            type: 'boolean',\n            description: 'Whether the phone number is eligible for hosted messaging.'\n          },\n          eligible_status: {\n            type: 'string',\n            description: 'The eligibility status of the phone number.',\n            enum: [              'NUMBER_CAN_NOT_BE_REPEATED',\n              'NUMBER_CAN_NOT_BE_VALIDATED',\n              'NUMBER_CAN_NOT_BE_WIRELESS',\n              'NUMBER_CAN_NOT_BE_ACTIVE_IN_YOUR_ACCOUNT',\n              'NUMBER_CAN_NOT_HOSTED_WITH_A_TELNYX_SUBSCRIBER',\n              'NUMBER_CAN_NOT_BE_IN_TELNYX',\n              'NUMBER_IS_NOT_A_US_NUMBER',\n              'NUMBER_IS_NOT_A_VALID_ROUTING_NUMBER',\n              'NUMBER_IS_NOT_IN_E164_FORMAT',\n              'BILLING_ACCOUNT_CHECK_FAILED',\n              'BILLING_ACCOUNT_IS_ABOLISHED',\n              'ELIGIBLE'\n            ]\n          },\n          phone_number: {\n            type: 'string',\n            description: 'The phone number in e164 format.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_numbers: {
        type: 'array',
        description: 'List of phone numbers to check eligibility',
        items: {
          type: 'string',
          description: 'Phone number to check eligibility',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['phone_numbers'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.messagingHostedNumberOrders.checkEligibility(body)),
  );
};

export default { metadata, tool, handler };
