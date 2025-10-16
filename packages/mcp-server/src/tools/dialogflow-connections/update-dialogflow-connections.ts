// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'dialogflow_connections',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/dialogflow_connections/{connection_id}',
  operationId: 'UpdateDialogflowConnection',
};

export const tool: Tool = {
  name: 'update_dialogflow_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a stored Dialogflow Connection.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dialogflow_connection_update_response',\n  $defs: {\n    dialogflow_connection_update_response: {\n      type: 'object',\n      title: 'Dialogflow Connection Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Dialogflow Connection',\n          properties: {\n            connection_id: {\n              type: 'string',\n              description: 'Uniquely identifies a Telnyx application (Call Control).'\n            },\n            conversation_profile_id: {\n              type: 'string',\n              description: 'The id of a configured conversation profile on your Dialogflow account. (If you use Dialogflow CX, this param is required)'\n            },\n            environment: {\n              type: 'string',\n              description: 'Which Dialogflow environment will be used.'\n            },\n            record_type: {\n              type: 'string'\n            },\n            service_account: {\n              type: 'string',\n              description: 'The JSON map to connect your Dialoglow account.'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
      },
      service_account: {
        type: 'object',
        description: 'The JSON map to connect your Dialoglow account.',
        additionalProperties: true,
      },
      conversation_profile_id: {
        type: 'string',
        description:
          'The id of a configured conversation profile on your Dialogflow account. (If you use Dialogflow CX, this param is required)',
      },
      dialogflow_api: {
        type: 'string',
        description: 'Determine which Dialogflow will be used.',
        enum: ['cx', 'es'],
      },
      environment: {
        type: 'string',
        description: 'Which Dialogflow environment will be used.',
      },
      location: {
        type: 'string',
        description: 'The region of your agent is. (If you use Dialogflow CX, this param is required)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['connection_id', 'service_account'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connection_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.dialogflowConnections.update(connection_id, body)),
  );
};

export default { metadata, tool, handler };
