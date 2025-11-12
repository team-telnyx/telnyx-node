// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_hosted_number_orders.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_hosted_number_orders/{id}/actions/file_upload',
  operationId: 'UploadMessagingHostedNumberOrderFile',
};

export const tool: Tool = {
  name: 'upload_file_messaging_hosted_number_orders_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload file required for a messaging hosted number order\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_upload_file_response',\n  $defs: {\n    action_upload_file_response: {\n      type: 'object',\n      title: 'Retrieve Messaging Hosted Number Order Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/messaging_hosted_number_order'\n        }\n      }\n    },\n    messaging_hosted_number_order: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Resource unique identifier.'\n        },\n        messaging_profile_id: {\n          type: 'string',\n          description: 'Automatically associate the number with this messaging profile ID when the order is complete.'\n        },\n        phone_numbers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/hosted_number'\n          }\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'carrier_rejected',\n            'compliance_review_failed',\n            'deleted',\n            'failed',\n            'incomplete_documentation',\n            'incorrect_billing_information',\n            'ineligible_carrier',\n            'loa_file_invalid',\n            'loa_file_successful',\n            'pending',\n            'provisioning',\n            'successful'\n          ]\n        }\n      }\n    },\n    hosted_number: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the type of resource.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'The messaging hosted phone number (+E.164 format)'\n        },\n        record_type: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'deleted',\n            'failed',\n            'failed_activation',\n            'failed_carrier_rejected',\n            'failed_ineligible_carrier',\n            'failed_number_already_hosted',\n            'failed_number_not_found',\n            'failed_ownership_verification',\n            'failed_timeout',\n            'pending',\n            'provisioning',\n            'successful'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      bill: {
        type: 'string',
        description:
          "Must be the last month's bill with proof of ownership of all of the numbers in the order in PDF format.",
      },
      loa: {
        type: 'string',
        description: 'Must be a signed LOA for the numbers in the order in PDF format.',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.messagingHostedNumberOrders.actions.uploadFile(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
