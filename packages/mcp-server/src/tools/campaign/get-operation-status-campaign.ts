// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaign/{campaignId}/operationStatus',
  operationId: 'GetCampaignOperationStatus',
};

export const tool: Tool = {
  name: 'get_operation_status_campaign',
  description: "Retrieve campaign's operation status at MNO level.",
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
  return asTextContentResult((await client.campaign.getOperationStatus(campaignId)) as object);
};

export default { metadata, tool, handler };
