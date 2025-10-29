// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/conferences',
  operationId: 'ListConferences',
};

export const tool: Tool = {
  name: 'list_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conference_list_response',\n  $defs: {\n    conference_list_response: {\n      type: 'object',\n      title: 'List Conferences Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/conference'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    conference: {\n      type: 'object',\n      title: 'Conference',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the conference'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference was created'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference will expire'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the conference'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'conference'\n          ]\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated with the conference'\n        },\n        end_reason: {\n          type: 'string',\n          description: 'Reason why the conference ended',\n          enum: [            'all_left',\n            'ended_via_api',\n            'host_left',\n            'time_exceeded'\n          ]\n        },\n        ended_by: {\n          type: 'object',\n          description: 'IDs related to who ended the conference. It is expected for them to all be there or all be null',\n          properties: {\n            call_control_id: {\n              type: 'string',\n              description: 'Call Control ID which ended the conference'\n            },\n            call_session_id: {\n              type: 'string',\n              description: 'Call Session ID which ended the conference'\n            }\n          }\n        },\n        region: {\n          type: 'string',\n          description: 'Region where the conference is hosted'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the conference',\n          enum: [            'init',\n            'in_progress',\n            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference was last updated'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'expires_at',\n        'name',\n        'record_type'\n      ]\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
      region: {
        type: 'string',
        description: 'Region where the conference data is located',
        enum: ['Australia', 'Europe', 'Middle East', 'US'],
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.conferences.list(body)));
};

export default { metadata, tool, handler };
