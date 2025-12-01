// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'phone_number_campaigns',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/phone_number_campaigns/{phoneNumber}',
  operationId: 'PutPhoneNumberCampaign',
};

export const tool: Tool = {
  name: 'update_phone_number_campaigns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate New Phone Number Campaign\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_campaign',\n  $defs: {\n    phone_number_campaign: {\n      type: 'object',\n      title: 'PhoneNumberCampaign',\n      properties: {\n        campaignId: {\n          type: 'string',\n          title: 'Campaignid',\n          description: 'For shared campaigns, this is the TCR campaign ID, otherwise it is the campaign ID '\n        },\n        createdAt: {\n          type: 'string',\n          title: 'Createdat'\n        },\n        phoneNumber: {\n          type: 'string',\n          title: 'Phonenumber'\n        },\n        updatedAt: {\n          type: 'string',\n          title: 'Updatedat'\n        },\n        assignmentStatus: {\n          type: 'string',\n          title: 'AssignmentStatus',\n          description: 'The assignment status of the number.',\n          enum: [            'FAILED_ASSIGNMENT',\n            'PENDING_ASSIGNMENT',\n            'ASSIGNED',\n            'PENDING_UNASSIGNMENT',\n            'FAILED_UNASSIGNMENT'\n          ]\n        },\n        brandId: {\n          type: 'string',\n          title: 'BrandId',\n          description: 'Brand ID. Empty if the number is associated to a shared campaign.'\n        },\n        failureReasons: {\n          type: 'string',\n          description: 'Extra info about a failure to assign/unassign a number. Relevant only if the assignmentStatus is either FAILED_ASSIGNMENT or FAILED_UNASSIGNMENT'\n        },\n        tcrBrandId: {\n          type: 'string',\n          title: 'TcrBrandId',\n          description: 'TCR\\'s alphanumeric ID for the brand.'\n        },\n        tcrCampaignId: {\n          type: 'string',\n          title: 'TcrCampaignid',\n          description: 'TCR\\'s alphanumeric ID for the campaign.'\n        },\n        telnyxCampaignId: {\n          type: 'string',\n          title: 'Telnyxcampaignid',\n          description: 'Campaign ID. Empty if the number is associated to a shared campaign.'\n        }\n      },\n      required: [        'campaignId',\n        'createdAt',\n        'phoneNumber',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_phoneNumber: {
        type: 'string',
        title: 'Phonenumber',
      },
      campaignId: {
        type: 'string',
        title: 'Campaignid',
        description: 'The ID of the campaign you want to link to the specified phone number.',
      },
      body_phoneNumber: {
        type: 'string',
        title: 'Phonenumber',
        description: 'The phone number you want to link to a specified campaign.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_phoneNumber', 'campaignId', 'body_phoneNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { phoneNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.phoneNumberCampaigns.update(phoneNumber, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
