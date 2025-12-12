// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_10dlc.campaign',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/campaign',
  operationId: 'GetCampaigns',
};

export const tool: Tool = {
  name: 'list_messaging_10dlc_campaign',
  description: 'Retrieve a list of campaigns associated with a supplied `brandId`.',
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      page: {
        type: 'integer',
        title: 'Page',
        description: 'The 1-indexed page number to get. The default value is `1`.',
      },
      recordsPerPage: {
        type: 'integer',
        title: 'Recordsperpage',
        description:
          'The amount of records per page, limited to between 1 and 500 inclusive. The default value is `10`.',
      },
      sort: {
        type: 'string',
        title: 'Sort',
        description:
          'Specifies the sort order for results. If not given, results are sorted by createdAt in descending order.',
        enum: [
          'assignedPhoneNumbersCount',
          '-assignedPhoneNumbersCount',
          'campaignId',
          '-campaignId',
          'createdAt',
          '-createdAt',
          'status',
          '-status',
          'tcrCampaignId',
          '-tcrCampaignId',
        ],
      },
    },
    required: ['brandId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.messaging10dlc.campaign.list(body).asResponse();
  try {
    return asTextContentResult(await response.json());
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
