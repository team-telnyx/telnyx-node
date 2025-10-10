// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'seti',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/seti/black_box_test_results',
  operationId: 'GetBlackBoxTestResults',
};

export const tool: Tool = {
  name: 'retrieve_black_box_test_results_seti',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the results of the various black box tests\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/seti_retrieve_black_box_test_results_response',\n  $defs: {\n    seti_retrieve_black_box_test_results_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              black_box_tests: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'The name of the black box test.'\n                    },\n                    record_type: {\n                      type: 'string'\n                    },\n                    result: {\n                      type: 'number',\n                      description: 'The average result of the black box test over the last hour.'\n                    }\n                  }\n                }\n              },\n              product: {\n                type: 'string',\n                description: 'The product associated with the black box test group.'\n              },\n              record_type: {\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description: 'Consolidated filter parameter (deepObject style). Originally: filter[product]',
        properties: {
          product: {
            type: 'string',
            description: 'Filter results for a specific product.',
          },
        },
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.seti.retrieveBlackBoxTestResults(body)),
  );
};

export default { metadata, tool, handler };
