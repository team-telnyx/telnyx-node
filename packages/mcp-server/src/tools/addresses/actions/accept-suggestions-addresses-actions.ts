// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'addresses.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/addresses/{id}/actions/accept_suggestions',
  operationId: 'acceptAddressSuggestions',
};

export const tool: Tool = {
  name: 'accept_suggestions_addresses_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAccepts this address suggestion as a new emergency address for Operator Connect and finishes the uploads of the numbers associated with it to Microsoft.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The UUID of the location.'\n        },\n        accepted: {\n          type: 'boolean',\n          description: 'Indicates if the address suggestions are accepted.'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'address_suggestion'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'string',
      },
      body_id: {
        type: 'string',
        description: 'The ID of the address.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.addresses.actions.acceptSuggestions(id, body)),
  );
};

export default { metadata, tool, handler };
