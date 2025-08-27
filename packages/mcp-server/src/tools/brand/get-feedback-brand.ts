// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand/feedback/{brandId}',
  operationId: 'GetBrandFeedbackById',
};

export const tool: Tool = {
  name: 'get_feedback_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet feedback about a brand by ID. This endpoint can be used after creating or revetting\na brand.\n\nPossible values for `.category[].id`:\n\n* `TAX_ID` - Data mismatch related to tax id and its associated properties.\n* `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or\n  the stock information mismatch.\n* `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.\n  Must be a U.S. government entity.\n* `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status\n  found.\n* `OTHERS` - Details of the data misrepresentation if any.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'BrandFeedback',\n  properties: {\n    brandId: {\n      type: 'string',\n      title: 'Brandid',\n      description: 'ID of the brand being queried about'\n    },\n    category: {\n      type: 'array',\n      title: 'Category',\n      description: 'A list of reasons why brand creation/revetting didn\\'t go as planned',\n      items: {\n        type: 'object',\n        title: 'BrandFeedbackCategory',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id',\n            description: 'One of `TAX_ID`, `STOCK_SYMBOL`, `GOVERNMENT_ENTITY`, `NONPROFIT`, and `OTHERS`'\n          },\n          description: {\n            type: 'string',\n            title: 'Description',\n            description: 'Long-form description of the feedback with additional information'\n          },\n          displayName: {\n            type: 'string',\n            title: 'Displayname',\n            description: 'Human-readable version of the `id` field'\n          },\n          fields: {\n            type: 'array',\n            title: 'Fields',\n            description: 'List of relevant fields in the originally-submitted brand json',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        required: [          'id',\n          'description',\n          'displayName',\n          'fields'\n        ]\n      }\n    }\n  },\n  required: [    'brandId',\n    'category'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['brandId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.brand.getFeedback(brandId)));
};

export default { metadata, tool, handler };
