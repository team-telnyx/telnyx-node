// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.integrations.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/integrations/connections/{user_connection_id}',
  operationId: 'get_user_integration_by_id_public_integrations_connections__user_connection_id__get',
};

export const tool: Tool = {
  name: 'retrieve_integrations_ai_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet user setup integrations\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connection_retrieve_response',\n  $defs: {\n    connection_retrieve_response: {\n      type: 'object',\n      title: 'IntegrationConnectionResponse',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'IntegrationConnection',\n          properties: {\n            id: {\n              type: 'string',\n              title: 'Id'\n            },\n            allowed_tools: {\n              type: 'array',\n              title: 'Allowed Tools',\n              items: {\n                type: 'string'\n              }\n            },\n            integration_id: {\n              type: 'string',\n              title: 'Integration Id'\n            }\n          },\n          required: [            'id',\n            'allowed_tools',\n            'integration_id'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      user_connection_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['user_connection_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { user_connection_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.integrations.connections.retrieve(user_connection_id)),
  );
};

export default { metadata, tool, handler };
