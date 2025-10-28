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
  httpPath: '/calls/{call_control_id}/actions/bridge',
  operationId: 'BridgeCall',
};

export const tool: Tool = {
  name: 'bridge_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBridge two call control calls.\n\n**Expected Webhooks:**\n\n- `call.bridged` for Leg A\n- `call.bridged` for Leg B\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_bridge_response',\n  $defs: {\n    action_bridge_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_call_control_id: {
        type: 'string',
      },
      call_control_id: {
        type: 'string',
        description:
          "The Call Control ID of the call you want to bridge with, can't be used together with queue parameter or video_room_id parameter.",
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
      mute_dtmf: {
        type: 'string',
        description:
          'When enabled, DTMF tones are not passed to the call participant. The webhooks containing the DTMF information will be sent.',
        enum: ['none', 'both', 'self', 'opposite'],
      },
      park_after_unbridge: {
        type: 'string',
        description:
          'Specifies behavior after the bridge ends (i.e. the opposite leg either hangs up or is transferred). If supplied with the value `self`, the current leg will be parked after unbridge. If not set, the default behavior is to hang up the leg.',
      },
      play_ringtone: {
        type: 'boolean',
        description:
          'Specifies whether to play a ringtone if the call you want to bridge with has not yet been answered.',
      },
      queue: {
        type: 'string',
        description:
          "The name of the queue you want to bridge with, can't be used together with call_control_id parameter or video_room_id parameter. Bridging with a queue means bridging with the first call in the queue. The call will always be removed from the queue regardless of whether bridging succeeds. Returns an error when the queue is empty.",
      },
      record: {
        type: 'string',
        description: 'Start recording automatically after an event. Disabled by default.',
        enum: ['record-from-answer'],
      },
      record_channels: {
        type: 'string',
        description:
          "Defines which channel should be recorded ('single' or 'dual') when `record` is specified.",
        enum: ['single', 'dual'],
      },
      record_custom_file_name: {
        type: 'string',
        description:
          'The custom recording file name to be used instead of the default `call_leg_id`. Telnyx will still add a Unix timestamp suffix.',
      },
      record_format: {
        type: 'string',
        description: "Defines the format of the recording ('wav' or 'mp3') when `record` is specified.",
        enum: ['wav', 'mp3'],
      },
      record_max_length: {
        type: 'integer',
        description:
          'Defines the maximum length for the recording in seconds when `record` is specified. The minimum value is 0. The maximum value is 43200. The default value is 0 (infinite).',
      },
      record_timeout_secs: {
        type: 'integer',
        description:
          'The number of seconds that Telnyx will wait for the recording to be stopped if silence is detected when `record` is specified. The timer only starts when the speech is detected. Please note that call transcription is used to detect silence and the related charge will be applied. The minimum value is 0. The default value is 0 (infinite).',
      },
      record_track: {
        type: 'string',
        description:
          'The audio track to be recorded. Can be either `both`, `inbound` or `outbound`. If only single track is specified (`inbound`, `outbound`), `channels` configuration is ignored and it will be recorded as mono (single channel).',
        enum: ['both', 'inbound', 'outbound'],
      },
      record_trim: {
        type: 'string',
        description:
          'When set to `trim-silence`, silence will be removed from the beginning and end of the recording.',
        enum: ['trim-silence'],
      },
      ringtone: {
        type: 'string',
        description:
          'Specifies which country ringtone to play when `play_ringtone` is set to `true`. If not set, the US ringtone will be played.',
        enum: [
          'at',
          'au',
          'be',
          'bg',
          'br',
          'ch',
          'cl',
          'cn',
          'cz',
          'de',
          'dk',
          'ee',
          'es',
          'fi',
          'fr',
          'gr',
          'hu',
          'il',
          'in',
          'it',
          'jp',
          'lt',
          'mx',
          'my',
          'nl',
          'no',
          'nz',
          'ph',
          'pl',
          'pt',
          'ru',
          'se',
          'sg',
          'th',
          'tw',
          'uk',
          'us-old',
          'us',
          've',
          'za',
        ],
      },
      video_room_context: {
        type: 'string',
        description:
          'The additional parameter that will be passed to the video conference. It is a text field and the user can decide how to use it. For example, you can set the participant name or pass JSON text. It can be used only with video_room_id parameter.',
      },
      video_room_id: {
        type: 'string',
        description:
          "The ID of the video room you want to bridge with, can't be used together with call_control_id parameter or queue parameter.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_call_control_id', 'call_control_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.bridge(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
