// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_10dlc.brand',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/10dlc/brand/{brandId}/smsOtp',
  operationId: 'VerifyBrandSmsOtp',
};

export const tool: Tool = {
  name: 'verify_sms_otp_messaging_10dlc_brand',
  description:
    "Verify the SMS OTP (One-Time Password) for Sole Proprietor brand verification.\n\n**Verification Flow:**\n\n1. User receives OTP via SMS after triggering\n2. User submits the OTP pin through this endpoint\n3. Upon successful verification:\n   - A `BRAND_OTP_VERIFIED` webhook event is sent to the CSP\n   - The brand's `identityStatus` changes to `VERIFIED`\n   - Campaigns can now be created for this brand\n\n**Error Handling:**\n\nProvides proper error responses for:\n* Invalid OTP pins\n* Expired OTPs\n* OTP verification failures",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      otpPin: {
        type: 'string',
        title: 'Otppin',
        description: 'The OTP PIN received via SMS',
      },
    },
    required: ['brandId', 'otpPin'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, ...body } = args as any;
  const response = await client.messaging10dlc.brand.verifySMSOtp(brandId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
