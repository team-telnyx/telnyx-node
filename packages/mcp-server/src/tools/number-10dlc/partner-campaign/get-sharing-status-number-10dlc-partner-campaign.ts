// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc.partner_campaign',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/partnerCampaign/{campaignId}/sharing',
  operationId: 'GetPartnerCampaignSharingStatus',
};

export const tool: Tool = {
  name: 'get_sharing_status_number_10dlc_partner_campaign',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Sharing Status\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/partner_campaign_get_sharing_status_response',\n  $defs: {\n    partner_campaign_get_sharing_status_response: {\n      type: 'object',\n      title: 'Response Get Sharing Status Public Partnercampaign  Campaignid  Sharing Get',\n      additionalProperties: true\n    }\n  }\n}\n```",
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
      await maybeFilter(jq_filter, await client.number10dlc.partnerCampaign.getSharingStatus(campaignId)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
