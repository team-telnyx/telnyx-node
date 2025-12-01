// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaign/{campaignId}/sharing',
  operationId: 'GetCampaignSharingStatus',
};

export const tool: Tool = {
  name: 'get_sharing_status_campaign',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Sharing Status\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/campaign_get_sharing_status_response',\n  $defs: {\n    campaign_get_sharing_status_response: {\n      type: 'object',\n      title: 'CampaignSharingChain',\n      properties: {\n        sharedByMe: {\n          $ref: '#/$defs/campaign_sharing_status'\n        },\n        sharedWithMe: {\n          $ref: '#/$defs/campaign_sharing_status'\n        }\n      }\n    },\n    campaign_sharing_status: {\n      type: 'object',\n      title: 'CampaignSharingStatus',\n      properties: {\n        downstreamCnpId: {\n          type: 'string',\n          title: 'Downstreamcnpid'\n        },\n        sharedDate: {\n          type: 'string',\n          title: 'Shareddate'\n        },\n        sharingStatus: {\n          type: 'string',\n          title: 'Sharingstatus'\n        },\n        statusDate: {\n          type: 'string',\n          title: 'Statusdate'\n        },\n        upstreamCnpId: {\n          type: 'string',\n          title: 'Upstreamcnpid'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
        title: 'Campaignid',
        description: 'ID of the campaign in question',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['campaignId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { campaignId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.campaign.getSharingStatus(campaignId)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
