// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'enum',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/enum/{endpoint}',
  operationId: 'GetEnumEndpoint',
};

export const tool: Tool = {
  name: 'retrieve_enum',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Enum\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/enum_retrieve_response',\n  $defs: {\n    enum_retrieve_response: {\n      anyOf: [        {\n          type: 'array',\n          title: 'EnumListResponse',\n          items: {\n            anyOf: [              {\n                type: 'string'\n              },\n              {\n                type: 'object',\n                additionalProperties: true\n              }\n            ]\n          }\n        },\n        {\n          type: 'object',\n          title: 'EnumObjectResponse',\n          additionalProperties: true\n        },\n        {\n          type: 'object',\n          title: 'EnumPaginatedResponse',\n          additionalProperties: true\n        }\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.enum.retrieve(endpoint)));
};

export default { metadata, tool, handler };
