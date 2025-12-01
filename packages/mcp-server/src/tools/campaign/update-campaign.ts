// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/campaign/{campaignId}',
  operationId: 'UpdateCampaign',
};

export const tool: Tool = {
  name: 'update_campaign',
  description:
    "Update a campaign's properties by `campaignId`. **Please note:** only sample messages are editable.",
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
        title: 'Campaignid',
      },
      autoRenewal: {
        type: 'boolean',
        title: 'Autorenewal',
        description: 'Help message of the campaign.',
      },
      helpMessage: {
        type: 'string',
        title: 'Helpmessage',
        description: 'Help message of the campaign.',
      },
      messageFlow: {
        type: 'string',
        title: 'Messageflow',
        description: 'Message flow description.',
      },
      resellerId: {
        type: 'string',
        title: 'Resellerid',
        description: 'Alphanumeric identifier of the reseller that you want to associate with this campaign.',
      },
      sample1: {
        type: 'string',
        title: 'Sample1',
        description: 'Message sample. Some campaign tiers require 1 or more message samples.',
      },
      sample2: {
        type: 'string',
        title: 'Sample2',
        description: 'Message sample. Some campaign tiers require 2 or more message samples.',
      },
      sample3: {
        type: 'string',
        title: 'Sample3',
        description: 'Message sample. Some campaign tiers require 3 or more message samples.',
      },
      sample4: {
        type: 'string',
        title: 'Sample4',
        description: 'Message sample. Some campaign tiers require 4 or more message samples.',
      },
      sample5: {
        type: 'string',
        title: 'Sample5',
        description: 'Message sample. Some campaign tiers require 5 or more message samples.',
      },
      webhookFailoverURL: {
        type: 'string',
        title: 'WebhookURL',
        description: 'Webhook failover to which campaign status updates are sent.',
      },
      webhookURL: {
        type: 'string',
        title: 'WebhookURL',
        description: 'Webhook to which campaign status updates are sent.',
      },
    },
    required: ['campaignId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { campaignId, ...body } = args as any;
  try {
    return asTextContentResult(await client.campaign.update(campaignId, body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
