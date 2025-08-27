// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/campaign/acceptSharing/{campaignId}',
  operationId: 'AcceptCampaign',
};

export const tool: Tool = {
  name: 'accept_sharing_campaign',
  description: 'Manually accept a campaign shared with Telnyx',
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
        title: 'Campaignid',
        description: "TCR's ID for the campaign to import",
      },
    },
    required: ['campaignId'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { campaignId, ...body } = args as any;
  return asTextContentResult((await client.campaign.acceptSharing(campaignId)) as object);
};

export default { metadata, tool, handler };
