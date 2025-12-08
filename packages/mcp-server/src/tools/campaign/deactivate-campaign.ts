// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/10dlc/campaign/{campaignId}',
  operationId: 'DeactivateCampaign',
};

export const tool: Tool = {
  name: 'deactivate_campaign',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTerminate a campaign. Note that once deactivated, a campaign cannot be restored.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/campaign_deactivate_response',\n  $defs: {\n    campaign_deactivate_response: {\n      type: 'object',\n      title: 'CampaignDeletionResponse',\n      properties: {\n        time: {\n          type: 'number',\n          title: 'Time'\n        },\n        message: {\n          type: 'string',\n          title: 'Message'\n        },\n        record_type: {\n          type: 'string',\n          title: 'Record Type'\n        }\n      },\n      required: [        'time'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
        title: 'Campaignid',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { campaignId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.campaign.deactivate(campaignId)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
