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
  httpPath: '/external_connections/log_messages',
  operationId: 'ListExternalConnectionLogMessages',
};

export const tool: Tool = {
  name: 'list_external_connections_log_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of log messages for all external connections associated with your account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Log Messages Response',\n  properties: {\n    log_messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/log_message_list_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/external_voice_integrations_pagination_meta'\n    }\n  },\n  $defs: {\n    log_message_list_response: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        title: {\n          type: 'string'\n        },\n        detail: {\n          type: 'string'\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            external_connection_id: {\n              type: 'string',\n              description: 'The external connection the log message is associated with, if any.'\n            },\n            telephone_number: {\n              type: 'string',\n              description: 'The telephone number the log message is associated with, if any.'\n            },\n            ticket_id: {\n              type: 'string',\n              description: 'The ticket ID for an operation that generated the log message, if any.'\n            }\n          }\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string',\n              description: 'JSON pointer (RFC6901) to the offending entity.'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'title'\n      ]\n    },\n    external_voice_integrations_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Filter parameter for log messages (deepObject style). Supports filtering by external_connection_id and telephone_number with eq/contains operations.',
        properties: {
          external_connection_id: {
            type: 'string',
            description:
              'The external connection ID to filter by or "null" to filter for logs without an external connection ID',
          },
          telephone_number: {
            type: 'object',
            description:
              "Telephone number filter operations for log messages. Use 'eq' for exact matches or 'contains' for partial matches.",
            properties: {
              contains: {
                type: 'string',
                description: 'The partial phone number to filter log messages for. Requires 3-15 digits.',
              },
              eq: {
                type: 'string',
                description:
                  'The phone number to filter log messages for or "null" to filter for logs without a phone number',
              },
            },
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.externalConnections.logMessages.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
