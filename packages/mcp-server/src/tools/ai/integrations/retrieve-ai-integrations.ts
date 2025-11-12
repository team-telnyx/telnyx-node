// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/integrations/{integration_id}',
  operationId: 'list_integration_by_id_public_integrations__integration_id__get',
};

export const tool: Tool = {
  name: 'retrieve_ai_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve integration details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_retrieve_response',\n  $defs: {\n    integration_retrieve_response: {\n      type: 'object',\n      title: 'Integration',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        available_tools: {\n          type: 'array',\n          title: 'Available Tools',\n          items: {\n            type: 'string'\n          }\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        display_name: {\n          type: 'string',\n          title: 'Display Name'\n        },\n        logo_url: {\n          type: 'string',\n          title: 'Logo Url'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        status: {\n          type: 'string',\n          title: 'Status',\n          enum: [            'disconnected',\n            'connected'\n          ]\n        }\n      },\n      required: [        'id',\n        'available_tools',\n        'description',\n        'display_name',\n        'logo_url',\n        'name',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      integration_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['integration_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { integration_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ai.integrations.retrieve(integration_id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
