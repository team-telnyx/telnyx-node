// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/brand/{brandId}/2faEmail',
  operationId: 'ResendBrand2faEmail',
};

export const tool: Tool = {
  name: 'resend_2fa_email_brand',
  description: 'Resend brand 2FA email',
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
    },
    required: ['brandId'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, ...body } = args as any;
  const response = await client.brand.resend2faEmail(brandId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
