// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.integrations.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/integrations/connections',
  operationId: 'list_user_integrations_public_integrations_connections_get',
};

export const tool: Tool = {
  name: 'list_integrations_ai_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList user setup integrations\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connection_list_response',\n  $defs: {\n    connection_list_response: {\n      type: 'object',\n      title: 'IntegrationConnectionsListResponse',\n      properties: {\n        data: {\n          type: 'array',\n          title: 'Data',\n          items: {\n            type: 'object',\n            title: 'IntegrationConnection',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Id'\n              },\n              allowed_tools: {\n                type: 'array',\n                title: 'Allowed Tools',\n                items: {\n                  type: 'string'\n                }\n              },\n              integration_id: {\n                type: 'string',\n                title: 'Integration Id'\n              }\n            },\n            required: [              'id',\n              'allowed_tools',\n              'integration_id'\n            ]\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.integrations.connections.list()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
