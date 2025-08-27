// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'call_control_applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/call_control_applications',
  operationId: 'ListCallControlApplications',
};

export const tool: Tool = {
  name: 'list_call_control_applications',
  description: 'Return a list of call control applications.',
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
      sort: {
        type: 'string',
        description:
          'Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/>\nThat is: <ul>\n  <li>\n    <code>connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in ascending order.\n  </li>\n\n  <li>\n    <code>-connection_name</code>: sorts the result by the\n    <code>connection_name</code> field in descending order.\n  </li>\n</ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.',
        enum: ['created_at', 'connection_name', 'active'],
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.callControlApplications.list(body));
};

export default { metadata, tool, handler };
