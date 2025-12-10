// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc.brand.sms_otp',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/10dlc/brand/{brandId}/smsOtp',
  operationId: 'TriggerBrandSmsOtp',
};

export const tool: Tool = {
  name: 'trigger_brand_number_10dlc_sms_otp',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTrigger or re-trigger an SMS OTP (One-Time Password) for Sole Proprietor brand verification.\n\n**Important Notes:**\n\n* Only allowed for Sole Proprietor (`SOLE_PROPRIETOR`) brands\n* Triggers generation of a one-time password sent to the `mobilePhone` number in the brand's profile\n* Campaigns cannot be created until OTP verification is complete\n* US/CA numbers only for real OTPs; mock brands can use non-US/CA numbers for testing\n* Returns a `referenceId` that can be used to check OTP status via the GET `/10dlc/brand/smsOtp/{referenceId}` endpoint\n\n**Use Cases:**\n\n* Initial OTP trigger after Sole Proprietor brand creation\n* Re-triggering OTP if the user didn't receive or needs a new code\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sms_otp_trigger_response',\n  $defs: {\n    sms_otp_trigger_response: {\n      type: 'object',\n      title: 'TriggerBrandSmsOtpResponse',\n      description: 'Response after successfully triggering a Brand SMS OTP',\n      properties: {\n        brandId: {\n          type: 'string',\n          title: 'Brandid',\n          description: 'The Brand ID for which the OTP was triggered'\n        },\n        referenceId: {\n          type: 'string',\n          title: 'Referenceid',\n          description: 'The reference ID that can be used to check OTP status'\n        }\n      },\n      required: [        'brandId',\n        'referenceId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      pinSms: {
        type: 'string',
        title: 'Pinsms',
        description:
          'SMS message template to send the OTP. Must include `@OTP_PIN@` placeholder which will be replaced with the actual PIN',
      },
      successSms: {
        type: 'string',
        title: 'Successsms',
        description: 'SMS message to send upon successful OTP verification',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['brandId', 'pinSms', 'successSms'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number10dlc.brand.smsOtp.trigger(brandId, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
