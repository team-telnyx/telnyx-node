// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_10dlc.phone_number_campaigns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/phone_number_campaigns',
  operationId: 'GetAllPhoneNumberCampaigns',
};

export const tool: Tool = {
  name: 'list_messaging_10dlc_phone_number_campaigns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve All Phone Number Campaigns\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'PhoneNumberCampaignPaginated',\n  properties: {\n    page: {\n      type: 'integer',\n      title: 'Page'\n    },\n    records: {\n      type: 'array',\n      title: 'Records',\n      items: {\n        $ref: '#/$defs/phone_number_campaign'\n      }\n    },\n    totalRecords: {\n      type: 'integer',\n      title: 'Totalrecords'\n    }\n  },\n  required: [    'page',\n    'records',\n    'totalRecords'\n  ],\n  $defs: {\n    phone_number_campaign: {\n      type: 'object',\n      title: 'PhoneNumberCampaign',\n      properties: {\n        campaignId: {\n          type: 'string',\n          title: 'Campaignid',\n          description: 'For shared campaigns, this is the TCR campaign ID, otherwise it is the campaign ID '\n        },\n        createdAt: {\n          type: 'string',\n          title: 'Createdat'\n        },\n        phoneNumber: {\n          type: 'string',\n          title: 'Phonenumber'\n        },\n        updatedAt: {\n          type: 'string',\n          title: 'Updatedat'\n        },\n        assignmentStatus: {\n          type: 'string',\n          title: 'AssignmentStatus',\n          description: 'The assignment status of the number.',\n          enum: [            'FAILED_ASSIGNMENT',\n            'PENDING_ASSIGNMENT',\n            'ASSIGNED',\n            'PENDING_UNASSIGNMENT',\n            'FAILED_UNASSIGNMENT'\n          ]\n        },\n        brandId: {\n          type: 'string',\n          title: 'BrandId',\n          description: 'Brand ID. Empty if the number is associated to a shared campaign.'\n        },\n        failureReasons: {\n          type: 'string',\n          description: 'Extra info about a failure to assign/unassign a number. Relevant only if the assignmentStatus is either FAILED_ASSIGNMENT or FAILED_UNASSIGNMENT'\n        },\n        tcrBrandId: {\n          type: 'string',\n          title: 'TcrBrandId',\n          description: 'TCR\\'s alphanumeric ID for the brand.'\n        },\n        tcrCampaignId: {\n          type: 'string',\n          title: 'TcrCampaignid',\n          description: 'TCR\\'s alphanumeric ID for the campaign.'\n        },\n        telnyxCampaignId: {\n          type: 'string',\n          title: 'Telnyxcampaignid',\n          description: 'Campaign ID. Empty if the number is associated to a shared campaign.'\n        }\n      },\n      required: [        'campaignId',\n        'createdAt',\n        'phoneNumber',\n        'updatedAt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[telnyx_campaign_id], filter[telnyx_brand_id], filter[tcr_campaign_id], filter[tcr_brand_id]',
        properties: {
          tcr_brand_id: {
            type: 'string',
            description: 'Filter results by the TCR Brand id',
          },
          tcr_campaign_id: {
            type: 'string',
            description: 'Filter results by the TCR Campaign id',
          },
          telnyx_brand_id: {
            type: 'string',
            description: 'Filter results by the Telnyx Brand id',
          },
          telnyx_campaign_id: {
            type: 'string',
            description: 'Filter results by the Telnyx Campaign id',
          },
        },
      },
      page: {
        type: 'integer',
        title: 'Page',
      },
      recordsPerPage: {
        type: 'integer',
        title: 'Recordsperpage',
      },
      sort: {
        type: 'string',
        title: 'Sort',
        description:
          'Specifies the sort order for results. If not given, results are sorted by createdAt in descending order.',
        enum: [
          'assignmentStatus',
          '-assignmentStatus',
          'createdAt',
          '-createdAt',
          'phoneNumber',
          '-phoneNumber',
        ],
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.messaging10dlc.phoneNumberCampaigns.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
