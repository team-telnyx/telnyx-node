// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc.brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/brand/smsOtp/{referenceId}',
  operationId: 'GetBrandSmsOtpStatus',
};

export const tool: Tool = {
  name: 'retrieve_sms_otp_status_number_10dlc_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nQuery the status of an SMS OTP (One-Time Password) for Sole Proprietor brand verification.\n\nThis endpoint allows you to check the delivery and verification status of an OTP sent during the Sole Proprietor brand verification process. You can query by either:\n\n* `referenceId` - The reference ID returned when the OTP was initially triggered\n* `brandId` - Query parameter for portal users to look up OTP status by Brand ID\n\nThe response includes delivery status, verification dates, and detailed delivery information.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/brand_retrieve_sms_otp_status_response',\n  $defs: {\n    brand_retrieve_sms_otp_status_response: {\n      type: 'object',\n      title: 'BrandSmsOtpStatus',\n      description: 'Status information for an SMS OTP sent during Sole Proprietor brand verification',\n      properties: {\n        brandId: {\n          type: 'string',\n          title: 'Brandid',\n          description: 'The Brand ID associated with this OTP request'\n        },\n        deliveryStatus: {\n          type: 'string',\n          title: 'Deliverystatus',\n          description: 'The current delivery status of the OTP SMS message. Common values include: `DELIVERED_HANDSET`, `PENDING`, `FAILED`, `EXPIRED`'\n        },\n        mobilePhone: {\n          type: 'string',\n          title: 'Mobilephone',\n          description: 'The mobile phone number where the OTP was sent, in E.164 format'\n        },\n        referenceId: {\n          type: 'string',\n          title: 'Referenceid',\n          description: 'The reference ID for this OTP request, used for status queries'\n        },\n        requestDate: {\n          type: 'string',\n          title: 'Requestdate',\n          description: 'The timestamp when the OTP request was initiated',\n          format: 'date-time'\n        },\n        deliveryStatusDate: {\n          type: 'string',\n          title: 'Deliverystatusdate',\n          description: 'The timestamp when the delivery status was last updated',\n          format: 'date-time'\n        },\n        deliveryStatusDetails: {\n          type: 'string',\n          title: 'Deliverystatusdetails',\n          description: 'Additional details about the delivery status'\n        },\n        verifyDate: {\n          type: 'string',\n          title: 'Verifydate',\n          description: 'The timestamp when the OTP was successfully verified (if applicable)',\n          format: 'date-time'\n        }\n      },\n      required: [        'brandId',\n        'deliveryStatus',\n        'mobilePhone',\n        'referenceId',\n        'requestDate'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      referenceId: {
        type: 'string',
        title: 'Referenceid',
      },
      brandId: {
        type: 'string',
        title: 'Brandid',
        description: 'Filter by Brand ID for easier lookup in portal applications',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['referenceId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { referenceId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number10dlc.brand.retrieveSMSOtpStatus(referenceId, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
