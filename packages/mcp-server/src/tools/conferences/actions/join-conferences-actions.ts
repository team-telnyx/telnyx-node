// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conferences/{id}/actions/join',
  operationId: 'JoinConference',
};

export const tool: Tool = {
  name: 'join_conferences_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nJoin an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request. \n\n**Expected Webhooks:**\n\n- `conference.participant.joined`\n- `conference.participant.left`\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_join_response',\n  $defs: {\n    action_join_response: {\n      type: 'object',\n      title: 'Conference Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/conference_command_result'\n        }\n      }\n    },\n    conference_command_result: {\n      type: 'object',\n      title: 'Conference Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      },\n      required: [        'result'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      call_control_id: {
        type: 'string',
        description: 'Unique identifier and token for controlling the call',
      },
      beep_enabled: {
        type: 'string',
        description:
          'Whether a beep sound should be played when the participant joins and/or leaves the conference. Can be used to override the conference-level setting.',
        enum: ['always', 'never', 'on_enter', 'on_exit'],
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string. Please note that the client_state will be updated for the participient call leg and the change will not affect conferencing webhooks unless the participient is the owner of the conference.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.',
      },
      end_conference_on_exit: {
        type: 'boolean',
        description:
          'Whether the conference should end and all remaining participants be hung up after the participant leaves the conference. Defaults to "false".',
      },
      hold: {
        type: 'boolean',
        description:
          'Whether the participant should be put on hold immediately after joining the conference. Defaults to "false".',
      },
      hold_audio_url: {
        type: 'string',
        description:
          'The URL of a file to be played to the participant when they are put on hold after joining the conference. hold_media_name and hold_audio_url cannot be used together in one request. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".',
      },
      hold_media_name: {
        type: 'string',
        description:
          'The media_name of a file to be played to the participant when they are put on hold after joining the conference. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file. Takes effect only when "start_conference_on_create" is set to "false". This property takes effect only if "hold" is set to "true".',
      },
      mute: {
        type: 'boolean',
        description:
          'Whether the participant should be muted immediately after joining the conference. Defaults to "false".',
      },
      region: {
        type: 'string',
        description:
          "Region where the conference data is located. Defaults to the region defined in user's data locality settings (Europe or US).",
        enum: ['Australia', 'Europe', 'Middle East', 'US'],
      },
      soft_end_conference_on_exit: {
        type: 'boolean',
        description:
          'Whether the conference should end after the participant leaves the conference. NOTE this doesn\'t hang up the other participants. Defaults to "false".',
      },
      start_conference_on_enter: {
        type: 'boolean',
        description:
          'Whether the conference should be started after the participant joins the conference. Defaults to "false".',
      },
      supervisor_role: {
        type: 'string',
        description:
          'Sets the joining participant as a supervisor for the conference. A conference can have multiple supervisors. "barge" means the supervisor enters the conference as a normal participant. This is the same as "none". "monitor" means the supervisor is muted but can hear all participants. "whisper" means that only the specified "whisper_call_control_ids" can hear the supervisor. Defaults to "none".',
        enum: ['barge', 'monitor', 'none', 'whisper'],
      },
      whisper_call_control_ids: {
        type: 'array',
        description:
          'Array of unique call_control_ids the joining supervisor can whisper to. If none provided, the supervisor will join the conference as a monitoring participant only.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'call_control_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.conferences.actions.join(id, body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
