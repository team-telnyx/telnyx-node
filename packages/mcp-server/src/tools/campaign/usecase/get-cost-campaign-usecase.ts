// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'campaign.usecase',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaign/usecase/cost',
  operationId: 'GetCampaignCost',
};

export const tool: Tool = {
  name: 'get_cost_campaign_usecase',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Campaign Cost\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/usecase_get_cost_response',\n  $defs: {\n    usecase_get_cost_response: {\n      type: 'object',\n      title: 'CampaignCost',\n      properties: {\n        campaignUsecase: {\n          type: 'string',\n          title: 'Campaignusecase'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        monthlyCost: {\n          type: 'string',\n          title: 'Monthlycost'\n        },\n        upFrontCost: {\n          type: 'string',\n          title: 'Upfrontcost'\n        }\n      },\n      required: [        'campaignUsecase',\n        'description',\n        'monthlyCost',\n        'upFrontCost'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      usecase: {
        type: 'string',
        title: 'Usecase',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['usecase'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.campaign.usecase.getCost(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
