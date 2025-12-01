// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'porting',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/porting/uk_carriers',
  operationId: 'listPortingUKCarriers',
};

export const tool: Tool = {
  name: 'list_uk_carriers_porting',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList available carriers in the UK.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/porting_list_uk_carriers_response',\n  $defs: {\n    porting_list_uk_carriers_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifies the UK carrier.'\n              },\n              alternative_cupids: {\n                type: 'array',\n                description: 'Alternative CUPIDs of the carrier.',\n                items: {\n                  type: 'string',\n                  description: 'An alternative CUPID of the carrier.'\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was created.',\n                format: 'date-time'\n              },\n              cupid: {\n                type: 'string',\n                description: 'The CUPID of the carrier. This is a 3 digit number code that identifies the carrier in the UK.'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the carrier.'\n              },\n              record_type: {\n                type: 'string',\n                description: 'Identifies the type of the resource.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the resource was updated.',\n                format: 'date-time'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.porting.listUkCarriers()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
