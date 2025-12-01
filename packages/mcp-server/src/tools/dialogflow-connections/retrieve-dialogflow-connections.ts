// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'dialogflow_connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dialogflow_connections/{connection_id}',
  operationId: 'GetDialogflowConnection',
};

export const tool: Tool = {
  name: 'retrieve_dialogflow_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn details of the Dialogflow connection associated with the given CallControl connection.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dialogflow_connection_retrieve_response',\n  $defs: {\n    dialogflow_connection_retrieve_response: {\n      type: 'object',\n      title: 'Dialogflow Connection Response',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Dialogflow Connection',\n          properties: {\n            connection_id: {\n              type: 'string',\n              description: 'Uniquely identifies a Telnyx application (Call Control).'\n            },\n            conversation_profile_id: {\n              type: 'string',\n              description: 'The id of a configured conversation profile on your Dialogflow account. (If you use Dialogflow CX, this param is required)'\n            },\n            environment: {\n              type: 'string',\n              description: 'Which Dialogflow environment will be used.'\n            },\n            record_type: {\n              type: 'string'\n            },\n            service_account: {\n              type: 'string',\n              description: 'The JSON map to connect your Dialoglow account.'\n            }\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['connection_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connection_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.dialogflowConnections.retrieve(connection_id)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
