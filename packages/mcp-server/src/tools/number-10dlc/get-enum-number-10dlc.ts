// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/enum/{endpoint}',
  operationId: 'GetEnumEndpoint',
};

export const tool: Tool = {
  name: 'get_enum_number_10dlc',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Enum\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_10dlc_get_enum_response',\n  $defs: {\n    number_10dlc_get_enum_response: {\n      anyOf: [        {\n          type: 'array',\n          title: 'EnumStringListResponse',\n          items: {\n            type: 'string'\n          }\n        },\n        {\n          type: 'array',\n          title: 'EnumObjectListResponse',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        {\n          type: 'object',\n          title: 'EnumObjectToStringResponse',\n          additionalProperties: true\n        },\n        {\n          type: 'object',\n          title: 'EnumObjecToObjecttResponse',\n          additionalProperties: true\n        },\n        {\n          type: 'object',\n          title: 'EnumPaginatedResponse',\n          properties: {\n            page: {\n              type: 'integer'\n            },\n            records: {\n              type: 'array',\n              items: {\n                type: 'object',\n                additionalProperties: true\n              }\n            },\n            totalRecords: {\n              type: 'integer'\n            }\n          },\n          required: [            'page',\n            'records',\n            'totalRecords'\n          ]\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      endpoint: {
        type: 'string',
        title: 'Endpoint',
        enum: [
          'mno',
          'optionalAttributes',
          'usecase',
          'vertical',
          'altBusinessIdType',
          'brandIdentityStatus',
          'brandRelationship',
          'campaignStatus',
          'entityType',
          'extVettingProvider',
          'vettingStatus',
          'brandStatus',
          'operationStatus',
          'approvedPublicCompany',
          'stockExchange',
          'vettingClass',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['endpoint'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { endpoint, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number10dlc.getEnum(endpoint)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
