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
  httpPath: '/campaign/{campaignId}/mnoMetadata',
  operationId: 'GetCampaignMnoMetadata',
};

export const tool: Tool = {
  name: 'get_mno_metadata_campaign',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the campaign metadata for each MNO it was submitted to.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/campaign_get_mno_metadata_response',\n  $defs: {\n    campaign_get_mno_metadata_response: {\n      type: 'object',\n      title: 'MnoMetadata',\n      properties: {\n        '10999': {\n          type: 'object',\n          title: 'MnoMetadataItem',\n          properties: {\n            minMsgSamples: {\n              type: 'integer'\n            },\n            mno: {\n              type: 'string'\n            },\n            mnoReview: {\n              type: 'boolean'\n            },\n            mnoSupport: {\n              type: 'boolean'\n            },\n            noEmbeddedLink: {\n              type: 'boolean'\n            },\n            noEmbeddedPhone: {\n              type: 'boolean'\n            },\n            qualify: {\n              type: 'boolean'\n            },\n            reqSubscriberHelp: {\n              type: 'boolean'\n            },\n            reqSubscriberOptin: {\n              type: 'boolean'\n            },\n            reqSubscriberOptout: {\n              type: 'boolean'\n            }\n          },\n          required: [            'minMsgSamples',\n            'mno',\n            'mnoReview',\n            'mnoSupport',\n            'noEmbeddedLink',\n            'noEmbeddedPhone',\n            'qualify',\n            'reqSubscriberHelp',\n            'reqSubscriberOptin',\n            'reqSubscriberOptout'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
      await maybeFilter(jq_filter, await client.campaign.getMnoMetadata(campaignId)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
