// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'campaign_builder.brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campaignBuilder/brand/{brandId}/usecase/{usecase}',
  operationId: 'GetUsecaseQualification',
};

export const tool: Tool = {
  name: 'qualify_by_usecase_campaign_builder_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'UsecaseMetadata',\n  properties: {\n    annualFee: {\n      type: 'number',\n      title: 'Annualfee',\n      description: 'Campaign annual subscription fee'\n    },\n    maxSubUsecases: {\n      type: 'integer',\n      title: 'Maxsubusecases',\n      description: 'Maximum number of sub-usecases declaration required.'\n    },\n    minSubUsecases: {\n      type: 'integer',\n      title: 'Minsubusecases',\n      description: 'Minimum number of sub-usecases declaration required.'\n    },\n    mnoMetadata: {\n      type: 'object',\n      title: 'Mnometadata',\n      description: 'Map of usecase metadata for each MNO. Key is the network ID of the MNO (e.g. 10017), Value is the mno metadata for the usecase.',\n      additionalProperties: true\n    },\n    monthlyFee: {\n      type: 'number',\n      title: 'Monthlyfee',\n      description: 'Campaign monthly subscription fee'\n    },\n    quarterlyFee: {\n      type: 'number',\n      title: 'Quarterlyfee',\n      description: 'Campaign quarterly subscription fee'\n    },\n    usecase: {\n      type: 'string',\n      title: 'Usecase',\n      description: 'Campaign usecase'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
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
    required: ['brandId', 'usecase'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { usecase, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.campaignBuilder.brand.qualifyByUsecase(usecase, body)),
  );
};

export default { metadata, tool, handler };
