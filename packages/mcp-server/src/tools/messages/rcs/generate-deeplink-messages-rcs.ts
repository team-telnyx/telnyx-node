// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messages.rcs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messages/rcs/deeplinks/{agent_id}',
};

export const tool: Tool = {
  name: 'generate_deeplink_messages_rcs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate a deeplink URL that can be used to start an RCS conversation with a specific agent.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        url: {\n          type: 'string',\n          description: 'The generated deeplink URL'\n        }\n      },\n      required: [        'url'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
      },
      body: {
        type: 'string',
        description: 'Pre-filled message body (URL encoded)',
      },
      phone_number: {
        type: 'string',
        description: 'Phone number in E164 format (URL encoded)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['agent_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { agent_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.messages.rcs.generateDeeplink(agent_id, body)),
  );
};

export default { metadata, tool, handler };
