// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/playback_start',
  operationId: 'StartCallPlayback',
};

export const tool: Tool = {
  name: 'start_playback_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPlay an audio file on the call. If multiple play audio commands are issued consecutively,\nthe audio files will be placed in a queue awaiting playback.\n\n*Notes:*\n\n- When `overlay` is enabled, `target_legs` is limited to `self`.\n- A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.\n\n**Expected Webhooks:**\n\n- `call.playback.started`\n- `call.playback.ended`\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Call Control Command Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/call_control_command_result'\n    }\n  },\n  $defs: {\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      audio_type: {
        type: 'string',
        description: 'Specifies the type of audio provided in `audio_url` or `playback_content`.',
        enum: ['mp3', 'wav'],
      },
      audio_url: {
        type: 'string',
        description:
          'The URL of a file to be played back on the call. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.',
      },
      cache_audio: {
        type: 'boolean',
        description:
          'Caches the audio file. Useful when playing the same audio file multiple times during the call.',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.',
      },
      loop: {
        $ref: '#/$defs/loopcount',
      },
      media_name: {
        type: 'string',
        description:
          'The media_name of a file to be played back on the call. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.',
      },
      overlay: {
        type: 'boolean',
        description:
          'When enabled, audio will be mixed on top of any other audio that is actively being played back. Note that `overlay: true` will only work if there is another audio file already being played on the call.',
      },
      playback_content: {
        type: 'string',
        description:
          'Allows a user to provide base64 encoded mp3 or wav. Note: when using this parameter, `media_url` and `media_name` in the `playback_started` and `playback_ended` webhooks will be empty',
      },
      stop: {
        type: 'string',
        description:
          'When specified, it stops the current audio being played. Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.',
      },
      target_legs: {
        type: 'string',
        description:
          'Specifies the leg or legs on which audio will be played. If supplied, the value must be either `self`, `opposite` or `both`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id'],
    $defs: {
      loopcount: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'integer',
          },
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.startPlayback(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
