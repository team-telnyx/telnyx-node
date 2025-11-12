// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/gather_using_audio',
  operationId: 'GatherUsingAudio',
};

export const tool: Tool = {
  name: 'gather_using_audio_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPlay an audio file on the call until the required DTMF signals are gathered to build interactive menus.\n\nYou can pass a list of valid digits along with an 'invalid_audio_url', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The `Answer command must be issued before the `gather_using_audio` command.\n\n**Expected Webhooks:**\n\n- `call.playback.started`\n- `call.playback.ended`\n- `call.dtmf.received` (you may receive many of these webhooks)\n- `call.gather.ended`\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_gather_using_audio_response',\n  $defs: {\n    action_gather_using_audio_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      audio_url: {
        type: 'string',
        description:
          'The URL of a file to be played back at the beginning of each prompt. The URL can point to either a WAV or MP3 file. media_name and audio_url cannot be used together in one request.',
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
      inter_digit_timeout_millis: {
        type: 'integer',
        description: 'The number of milliseconds to wait for input between digits.',
      },
      invalid_audio_url: {
        type: 'string',
        description:
          "The URL of a file to play when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The URL can point to either a WAV or MP3 file. invalid_media_name and invalid_audio_url cannot be used together in one request.",
      },
      invalid_media_name: {
        type: 'string',
        description:
          "The media_name of a file to be played back when digits don't match the `valid_digits` parameter or the number of digits is not between `min` and `max`. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.",
      },
      maximum_digits: {
        type: 'integer',
        description: 'The maximum number of digits to fetch. This parameter has a maximum value of 128.',
      },
      maximum_tries: {
        type: 'integer',
        description:
          'The maximum number of times the file should be played if there is no input from the user on the call.',
      },
      media_name: {
        type: 'string',
        description:
          'The media_name of a file to be played back at the beginning of each prompt. The media_name must point to a file previously uploaded to api.telnyx.com/v2/media by the same user/organization. The file must either be a WAV or MP3 file.',
      },
      minimum_digits: {
        type: 'integer',
        description: 'The minimum number of digits to fetch. This parameter has a minimum value of 1.',
      },
      terminating_digit: {
        type: 'string',
        description:
          'The digit used to terminate input if fewer than `maximum_digits` digits have been gathered.',
      },
      timeout_millis: {
        type: 'integer',
        description:
          'The number of milliseconds to wait for a DTMF response after file playback ends before a replaying the sound file.',
      },
      valid_digits: {
        type: 'string',
        description: 'A list of all digits accepted as valid.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.calls.actions.gatherUsingAudio(call_control_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
