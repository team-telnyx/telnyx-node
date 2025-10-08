// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'portouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/portouts/rejections/{portout_id}',
  operationId: 'ListPortoutRejections',
};

export const tool: Tool = {
  name: 'list_rejection_codes_portouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGiven a port-out ID, list rejection codes that are eligible for that port-out\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/portout_list_rejection_codes_response',\n  $defs: {\n    portout_list_rejection_codes_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'integer'\n              },\n              description: {\n                type: 'string'\n              },\n              reason_required: {\n                type: 'boolean'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      portout_id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[code], filter[code][in]',
        properties: {
          code: {
            anyOf: [
              {
                type: 'integer',
                description: 'Filter rejections of a specific code',
              },
              {
                type: 'array',
                description: 'Filter rejections in a list of codes',
                items: {
                  type: 'integer',
                },
              },
            ],
            description: 'Filter rejections of a specific code',
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
    required: ['portout_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { portout_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.portouts.listRejectionCodes(portout_id, body)),
  );
};

export default { metadata, tool, handler };
