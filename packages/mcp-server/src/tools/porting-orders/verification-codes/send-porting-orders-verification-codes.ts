// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting_orders.verification_codes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/porting_orders/{id}/verification_codes/send',
  operationId: 'SendPortingVerificationCodes',
};

export const tool: Tool = {
  name: 'send_porting_orders_verification_codes',
  description: 'Send the verification code for all porting phone numbers.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      phone_numbers: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      verification_method: {
        type: 'string',
        enum: ['sms', 'call'],
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.portingOrders.verificationCodes.send(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
