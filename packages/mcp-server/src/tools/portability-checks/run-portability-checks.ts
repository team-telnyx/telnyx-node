// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'portability_checks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/portability_checks',
  operationId: 'PostPortabilityCheck',
};

export const tool: Tool = {
  name: 'run_portability_checks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRuns a portability check, returning the results immediately.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          fast_portable: {\n            type: 'boolean',\n            description: 'Indicates whether this phone number is FastPort eligible'\n          },\n          not_portable_reason: {\n            type: 'string',\n            description: 'If this phone number is not portable, explains why. Empty string if the number is portable.'\n          },\n          phone_number: {\n            type: 'string',\n            description: 'The +E.164 formatted phone number this result is about'\n          },\n          portable: {\n            type: 'boolean',\n            description: 'Indicates whether this phone number is portable'\n          },\n          record_type: {\n            type: 'string',\n            description: 'Identifies the type of the resource.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      phone_numbers: {
        type: 'array',
        description: 'The list of +E.164 formatted phone numbers to check for portability',
        items: {
          type: 'string',
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.portabilityChecks.run(body)));
};

export default { metadata, tool, handler };
