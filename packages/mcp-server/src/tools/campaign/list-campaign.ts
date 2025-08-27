// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaign',
  operationId: 'GetCampaigns',
};

export const tool: Tool = {
  name: 'list_campaign',
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
  return asTextContentResult(await client.campaign.list(body));
};

export default { metadata, tool, handler };
