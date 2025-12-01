// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaign/{campaignId}',
  operationId: 'GetCampaign',
};

export const tool: Tool = {
  name: 'retrieve_campaign',
  description: 'Retrieve campaign details by `campaignId`.',
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
        title: 'Campaignid',
      },
    },
    required: ['campaignId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { campaignId, ...body } = args as any;
  try {
    return asTextContentResult(await client.campaign.retrieve(campaignId));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
