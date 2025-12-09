// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'call_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/call_events',
  operationId: 'ListCallEvents',
};

export const tool: Tool = {
  name: 'list_call_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFilters call events by given filter parameters. Events are ordered by `occurred_at`. If filter for `leg_id` or `application_session_id` is not present, it only filters events from the last 24 hours.\n\n**Note**: Only one `filter[occurred_at]` can be passed.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'List Call Events Response',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/call_event_list_response'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    call_event_list_response: {\n      type: 'object',\n      title: 'Call Event',\n      properties: {\n        call_leg_id: {\n          type: 'string',\n          description: 'Uniquely identifies an individual call leg.'\n        },\n        call_session_id: {\n          type: 'string',\n          description: 'Uniquely identifies the call control session. A session may include multiple call leg events.'\n        },\n        event_timestamp: {\n          type: 'string',\n          description: 'Event timestamp'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Event metadata, which includes raw event, and extra information based on event type',\n          additionalProperties: true\n        },\n        name: {\n          type: 'string',\n          description: 'Event name'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'call_event'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Event type',\n          enum: [            'command',\n            'webhook'\n          ]\n        }\n      },\n      required: [        'call_leg_id',\n        'call_session_id',\n        'event_timestamp',\n        'metadata',\n        'name',\n        'record_type',\n        'type'\n      ]\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[application_name][contains], filter[outbound.outbound_voice_profile_id], filter[leg_id], filter[application_session_id], filter[connection_id], filter[product], filter[failed], filter[from], filter[to], filter[name], filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]',
        properties: {
          application_name: {
            type: 'object',
            description: 'Application name filters',
            properties: {
              contains: {
                type: 'string',
                description:
                  'If present, applications with <code>application_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters.',
              },
            },
          },
          application_session_id: {
            type: 'string',
            description:
              'The unique identifier of the call session. A session may include multiple call leg events.',
          },
          connection_id: {
            type: 'string',
            description: 'The unique identifier of the conection.',
          },
          failed: {
            type: 'boolean',
            description: 'Delivery failed or not.',
          },
          from: {
            type: 'string',
            description: 'Filter by From number.',
          },
          leg_id: {
            type: 'string',
            description: 'The unique identifier of an individual call leg.',
          },
          name: {
            type: 'string',
            description:
              'If present, conferences will be filtered to those with a matching `name` attribute. Matching is case-sensitive',
          },
          occurred_at: {
            type: 'object',
            description: 'Event occurred_at filters',
            properties: {
              eq: {
                type: 'string',
                description: 'Event occurred_at: equal',
              },
              gt: {
                type: 'string',
                description: 'Event occurred_at: greater than',
              },
              gte: {
                type: 'string',
                description: 'Event occurred_at: greater than or equal',
              },
              lt: {
                type: 'string',
                description: 'Event occurred_at: lower than',
              },
              lte: {
                type: 'string',
                description: 'Event occurred_at: lower than or equal',
              },
            },
          },
          'outbound.outbound_voice_profile_id': {
            type: 'string',
            description: 'Identifies the associated outbound voice profile.',
          },
          product: {
            type: 'string',
            description: 'Filter by product.',
            enum: ['call_control', 'fax', 'texml'],
          },
          status: {
            type: 'string',
            description: 'If present, conferences will be filtered by status.',
            enum: ['init', 'in_progress', 'completed'],
          },
          to: {
            type: 'string',
            description: 'Filter by To number.',
          },
          type: {
            type: 'string',
            description: 'Event type',
            enum: ['command', 'webhook'],
          },
        },
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.callEvents.list(body).asResponse();
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
