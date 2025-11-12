// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connections/{connection_id}/active_calls',
  operationId: 'ListConnectionActiveCalls',
};

export const tool: Tool = {
  name: 'list_active_calls_connections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/connection_list_active_calls_response',\n  $defs: {\n    connection_list_active_calls_response: {\n      type: 'object',\n      title: 'Active Calls Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Active Call',\n            properties: {\n              call_control_id: {\n                type: 'string',\n                description: 'Unique identifier and token for controlling the call.'\n              },\n              call_duration: {\n                type: 'integer',\n                description: 'Indicates the duration of the call in seconds'\n              },\n              call_leg_id: {\n                type: 'string',\n                description: 'ID that is unique to the call and can be used to correlate webhook events'\n              },\n              call_session_id: {\n                type: 'string',\n                description: 'ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call'\n              },\n              client_state: {\n                type: 'string',\n                description: 'State received from a command.'\n              },\n              record_type: {\n                type: 'string',\n                enum: [                  'call'\n                ]\n              }\n            },\n            required: [              'call_control_id',\n              'call_duration',\n              'call_leg_id',\n              'call_session_id',\n              'client_state',\n              'record_type'\n            ]\n          }\n        },\n        meta: {\n          type: 'object',\n          title: 'Cursor Pagination Meta',\n          properties: {\n            cursors: {\n              type: 'object',\n              properties: {\n                after: {\n                  type: 'string',\n                  description: 'Opaque identifier of next page.'\n                },\n                before: {\n                  type: 'string',\n                  description: 'Opaque identifier of previous page.'\n                }\n              }\n            },\n            next: {\n              type: 'string',\n              description: 'Path to next page.'\n            },\n            previous: {\n              type: 'string',\n              description: 'Path to previous page.'\n            },\n            total_items: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
      },
      page: {
        type: 'object',
        description:
          'Consolidated page parameter (deepObject style). Originally: page[after], page[before], page[limit], page[size], page[number]',
        properties: {
          after: {
            type: 'string',
            description: 'Opaque identifier of next page',
          },
          before: {
            type: 'string',
            description: 'Opaque identifier of previous page',
          },
          limit: {
            type: 'integer',
            description: 'Limit of records per single page',
          },
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
      await maybeFilter(jq_filter, await client.connections.listActiveCalls(connection_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
