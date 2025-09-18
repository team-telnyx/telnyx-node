// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'queues.calls',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/queues/{queue_name}/calls',
  operationId: 'ListQueueCalls',
};

export const tool: Tool = {
  name: 'list_queues_calls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the list of calls in an existing queue\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Queue Calls Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        title: 'QueueCall',\n        properties: {\n          call_control_id: {\n            type: 'string',\n            description: 'Unique identifier and token for controlling the call.'\n          },\n          call_leg_id: {\n            type: 'string',\n            description: 'ID that is unique to the call and can be used to correlate webhook events'\n          },\n          call_session_id: {\n            type: 'string',\n            description: 'ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call'\n          },\n          connection_id: {\n            type: 'string',\n            description: 'Call Control App ID (formerly Telnyx connection ID) used in the call.'\n          },\n          enqueued_at: {\n            type: 'string',\n            description: 'ISO 8601 formatted date of when the call was put in the queue'\n          },\n          from: {\n            type: 'string',\n            description: 'Number or SIP URI placing the call.'\n          },\n          queue_id: {\n            type: 'string',\n            description: 'Unique identifier of the queue the call is in.'\n          },\n          queue_position: {\n            type: 'integer',\n            description: 'Current position of the call in the queue'\n          },\n          record_type: {\n            type: 'string',\n            enum: [              'queue_call'\n            ]\n          },\n          to: {\n            type: 'string',\n            description: 'Destination number or SIP URI of the call.'\n          },\n          wait_time_secs: {\n            type: 'integer',\n            description: 'The time the call has been waiting in the queue, given in seconds'\n          }\n        },\n        required: [          'call_control_id',\n          'call_leg_id',\n          'call_session_id',\n          'connection_id',\n          'enqueued_at',\n          'from',\n          'queue_id',\n          'queue_position',\n          'record_type',\n          'to',\n          'wait_time_secs'\n        ]\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      queue_name: {
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
    required: ['queue_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { queue_name, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.queues.calls.list(queue_name, body)));
};

export default { metadata, tool, handler };
