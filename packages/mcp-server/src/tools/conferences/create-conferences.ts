// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conferences',
  operationId: 'CreateConference',
};

export const tool: Tool = {
  name: 'create_conferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.\n\n**Expected Webhooks (see [callback schema](https://developers.telnyx.com/api/call-control/create-conference#callbacks) below):**\n\n- `conference.created`\n- `conference.participant.joined`\n- `conference.participant.left`\n- `conference.ended`\n- `conference.recording.saved`\n- `conference.floor.changed`\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Conference Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/conference'\n    }\n  },\n  $defs: {\n    conference: {\n      type: 'object',\n      title: 'Conference',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the conference'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference was created'\n        },\n        expires_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference will expire'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the conference'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'conference'\n          ]\n        },\n        connection_id: {\n          type: 'string',\n          description: 'Identifies the connection associated with the conference'\n        },\n        end_reason: {\n          type: 'string',\n          description: 'Reason why the conference ended',\n          enum: [            'all_left',\n            'ended_via_api',\n            'host_left',\n            'time_exceeded'\n          ]\n        },\n        ended_by: {\n          type: 'object',\n          description: 'IDs related to who ended the conference. It is expected for them to all be there or all be null',\n          properties: {\n            call_control_id: {\n              type: 'string',\n              description: 'Call Control ID which ended the conference'\n            },\n            call_session_id: {\n              type: 'string',\n              description: 'Call Session ID which ended the conference'\n            }\n          }\n        },\n        region: {\n          type: 'string',\n          description: 'Region where the conference is hosted'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the conference',\n          enum: [            'init',\n            'in_progress',\n            'completed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the conference was last updated'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'expires_at',\n        'name',\n        'record_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
        description: 'Unique identifier and token for controlling the call',
      },
      name: {
        type: 'string',
        description: 'Name of the conference',
      },
      beep_enabled: {
        type: 'string',
        description:
          'Whether a beep sound should be played when participants join and/or leave the conference.',
        enum: ['always', 'never', 'on_enter', 'on_exit'],
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string. The client_state will be updated for the creator call leg and will be used for all webhooks related to the created conference.',
      },
      comfort_noise: {
        type: 'boolean',
        description: 'Toggle background comfort noise.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.',
      },
      duration_minutes: {
        type: 'integer',
        description: 'Time length (minutes) after which the conference will end.',
      },
      hold_audio_url: {
        type: 'string',
        description:
          'The URL of a file to be played to participants joining the conference. The URL can point to either a WAV or MP3 file. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when "start_conference_on_create" is set to "false".',
      },
      hold_media_name: {
        type: 'string',
        description:
          'The media_name of a file to be played to participants joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to "false".',
      },
      max_participants: {
        type: 'integer',
        description:
          'The maximum number of active conference participants to allow. Must be between 2 and 800. Defaults to 250',
      },
      start_conference_on_create: {
        type: 'boolean',
        description:
          'Whether the conference should be started on creation. If the conference isn\'t started all participants that join are automatically put on hold. Defaults to "true".',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.conferences.create(body)));
};

export default { metadata, tool, handler };
