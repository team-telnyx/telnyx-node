// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/conferences/{conference_id}/participants',
  operationId: 'ListConferenceParticipants',
};

export const tool: Tool = {
  name: 'list_participants_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists conference participants\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/conference_list_participants_response',\n  $defs: {\n    conference_list_participants_response: {\n      type: 'object',\n      title: 'List Participants Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Participant',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Uniquely identifies the participant'\n              },\n              call_control_id: {\n                type: 'string',\n                description: 'Call Control ID associated with the partiipant of the conference'\n              },\n              call_leg_id: {\n                type: 'string',\n                description: 'Uniquely identifies the call leg associated with the participant'\n              },\n              conference: {\n                type: 'object',\n                description: 'Info about the conference that the participant is in',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Uniquely identifies the conference'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of the conference'\n                  }\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date of when the participant was created'\n              },\n              end_conference_on_exit: {\n                type: 'boolean',\n                description: 'Whether the conference will end and all remaining participants be hung up after the participant leaves the conference.'\n              },\n              muted: {\n                type: 'boolean',\n                description: 'Whether the participant is muted.'\n              },\n              on_hold: {\n                type: 'boolean',\n                description: 'Whether the participant is put on_hold.'\n              },\n              record_type: {\n                type: 'string',\n                enum: [                  'participant'\n                ]\n              },\n              soft_end_conference_on_exit: {\n                type: 'boolean',\n                description: 'Whether the conference will end after the participant leaves the conference.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the participant with respect to the lifecycle within the conference',\n                enum: [                  'joining',\n                  'joined',\n                  'left'\n                ]\n              },\n              updated_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date of when the participant was last updated'\n              },\n              whisper_call_control_ids: {\n                type: 'array',\n                description: 'Array of unique call_control_ids the participant can whisper to..',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'id',\n              'call_control_id',\n              'call_leg_id',\n              'conference',\n              'created_at',\n              'end_conference_on_exit',\n              'muted',\n              'on_hold',\n              'record_type',\n              'soft_end_conference_on_exit',\n              'status',\n              'updated_at',\n              'whisper_call_control_ids'\n            ]\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      conference_id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[muted], filter[on_hold], filter[whispering]',
        properties: {
          muted: {
            type: 'boolean',
            description: 'If present, participants will be filtered to those who are/are not muted',
          },
          on_hold: {
            type: 'boolean',
            description: 'If present, participants will be filtered to those who are/are not put on hold',
          },
          whispering: {
            type: 'boolean',
            description: 'If present, participants will be filtered to those who are whispering or are not',
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
    required: ['conference_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { conference_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.conferences.listParticipants(conference_id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
