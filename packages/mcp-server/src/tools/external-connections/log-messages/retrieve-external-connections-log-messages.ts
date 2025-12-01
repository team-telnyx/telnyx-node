// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.log_messages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/log_messages/{id}',
  operationId: 'GetExternalConnectionLogMessage',
};

export const tool: Tool = {
  name: 'retrieve_external_connections_log_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a log message for an external connection associated with your account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/log_message_retrieve_response',\n  $defs: {\n    log_message_retrieve_response: {\n      type: 'object',\n      title: 'Get Log Message Response',\n      properties: {\n        log_messages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              },\n              detail: {\n                type: 'string'\n              },\n              meta: {\n                type: 'object',\n                properties: {\n                  external_connection_id: {\n                    type: 'string',\n                    description: 'The external connection the log message is associated with, if any.'\n                  },\n                  telephone_number: {\n                    type: 'string',\n                    description: 'The telephone number the log message is associated with, if any.'\n                  },\n                  ticket_id: {\n                    type: 'string',\n                    description: 'The ticket ID for an operation that generated the log message, if any.'\n                  }\n                }\n              },\n              source: {\n                type: 'object',\n                properties: {\n                  pointer: {\n                    type: 'string',\n                    description: 'JSON pointer (RFC6901) to the offending entity.'\n                  }\n                }\n              }\n            },\n            required: [              'code',\n              'title'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.externalConnections.logMessages.retrieve(id)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
