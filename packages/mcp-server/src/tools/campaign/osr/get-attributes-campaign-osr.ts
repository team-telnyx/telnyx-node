// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign.osr',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaign/{campaignId}/osr/attributes',
  operationId: 'GetCampaignOsrAttributes',
};

export const tool: Tool = {
  name: 'get_attributes_campaign_osr',
  description: 'Get My Osr Campaign Attributes',
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
  return asTextContentResult((await client.campaign.osr.getAttributes(campaignId)) as object);
};

export default { metadata, tool, handler };
