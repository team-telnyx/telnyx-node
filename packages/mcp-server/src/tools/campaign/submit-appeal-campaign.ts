// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/campaign/{campaignId}/appeal',
  operationId: 'AppealCampaign',
};

export const tool: Tool = {
  name: 'submit_appeal_campaign',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmits an appeal for rejected native campaigns in TELNYX_FAILED or MNO_REJECTED status. The appeal is recorded for manual compliance team review and the campaign status is reset to TCR_ACCEPTED. Note: Appeal forwarding is handled manually to allow proper review before incurring upstream charges.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/campaign_submit_appeal_response',\n  $defs: {\n    campaign_submit_appeal_response: {\n      type: 'object',\n      properties: {\n        appealed_at: {\n          type: 'string',\n          description: 'Timestamp when the appeal was submitted',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      campaignId: {
        type: 'string',
      },
      appeal_reason: {
        type: 'string',
        description:
          'Detailed explanation of why the campaign should be reconsidered and what changes have been made to address the rejection reason.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['campaignId', 'appeal_reason'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { campaignId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.campaign.submitAppeal(campaignId, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
