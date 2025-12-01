// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'recordings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/recordings',
  operationId: 'GetRecordings',
};

export const tool: Tool = {
  name: 'list_recordings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your call recordings.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/recording_list_response',\n  $defs: {\n    recording_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/recording_response_data'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    recording_response_data: {\n      type: 'object',\n      title: 'RecordingResponseData',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the recording.'\n        },\n        call_control_id: {\n          type: 'string',\n          description: 'Unique identifier and token for controlling the call.'\n        },\n        call_leg_id: {\n          type: 'string',\n          description: 'ID unique to the call leg (used to correlate webhook events).'\n        },\n        call_session_id: {\n          type: 'string',\n          description: 'ID that is unique to the call session and can be used to correlate webhook events. Call session is a group of related call legs that logically belong to the same phone call, e.g. an inbound and outbound leg of a transferred call.'\n        },\n        channels: {\n          type: 'string',\n          description: 'When `dual`, the final audio file has the first leg on channel A, and the rest on channel B.',\n          enum: [            'single',\n            'dual'\n          ]\n        },\n        conference_id: {\n          type: 'string',\n          description: 'Uniquely identifies the conference.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.'\n        },\n        download_urls: {\n          type: 'object',\n          description: 'Links to download the recording files.',\n          properties: {\n            mp3: {\n              type: 'string',\n              description: 'Link to download the recording in mp3 format.'\n            },\n            wav: {\n              type: 'string',\n              description: 'Link to download the recording in wav format.'\n            }\n          }\n        },\n        duration_millis: {\n          type: 'integer',\n          description: 'The duration of the recording in milliseconds.'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'recording'\n          ]\n        },\n        recording_ended_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the recording ended.'\n        },\n        recording_started_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the recording started.'\n        },\n        source: {\n          type: 'string',\n          description: 'The kind of event that led to this recording being created.',\n          enum: [            'conference',\n            'call'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the recording. Only `completed` recordings are currently supported.',\n          enum: [            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[conference_id], filter[created_at][gte], filter[created_at][lte], filter[call_leg_id], filter[call_session_id], filter[from], filter[to], filter[connection_id], filter[sip_call_id]',
        properties: {
          call_leg_id: {
            type: 'string',
            description: 'If present, recordings will be filtered to those with a matching call_leg_id.',
          },
          call_session_id: {
            type: 'string',
            description: 'If present, recordings will be filtered to those with a matching call_session_id.',
          },
          conference_id: {
            type: 'string',
            description: 'Returns only recordings associated with a given conference.',
          },
          connection_id: {
            type: 'string',
            description:
              'If present, recordings will be filtered to those with a matching `connection_id` attribute (case-sensitive).',
          },
          created_at: {
            type: 'object',
            properties: {
              gte: {
                type: 'string',
                description: 'Returns only recordings created later than or at given ISO 8601 datetime.',
              },
              lte: {
                type: 'string',
                description: 'Returns only recordings created earlier than or at given ISO 8601 datetime.',
              },
            },
          },
          from: {
            type: 'string',
            description:
              'If present, recordings will be filtered to those with a matching `from` attribute (case-sensitive).',
          },
          sip_call_id: {
            type: 'string',
            description:
              'If present, recordings will be filtered to those with a matching `sip_call_id` attribute. Matching is case-sensitive',
          },
          to: {
            type: 'string',
            description:
              'If present, recordings will be filtered to those with a matching `to` attribute (case-sensitive).',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load.',
          },
          size: {
            type: 'integer',
            description: 'The size of the page.',
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.recordings.list(body)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
