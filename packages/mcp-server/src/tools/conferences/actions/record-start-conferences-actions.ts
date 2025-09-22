// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conferences/{id}/actions/record_start',
  operationId: 'StartConferenceRecording',
};

export const tool: Tool = {
  name: 'record_start_conferences_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart recording the conference. Recording will stop on conference end, or via the Stop Recording command.\n\n**Expected Webhooks:**\n\n- `conference.recording.saved`\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Conference Command Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/conference_command_result'\n    }\n  },\n  $defs: {\n    conference_command_result: {\n      type: 'object',\n      title: 'Conference Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      },\n      required: [        'result'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      format: {
        type: 'string',
        description:
          'The audio file format used when storing the conference recording. Can be either `mp3` or `wav`.',
        enum: ['wav', 'mp3'],
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `conference_id`.',
      },
      custom_file_name: {
        type: 'string',
        description:
          'The custom recording file name to be used instead of the default `call_leg_id`. Telnyx will still add a Unix timestamp suffix.',
      },
      play_beep: {
        type: 'boolean',
        description: 'If enabled, a beep sound will be played at the start of a recording.',
      },
      trim: {
        type: 'string',
        description:
          'When set to `trim-silence`, silence will be removed from the beginning and end of the recording.',
        enum: ['trim-silence'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'format'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.conferences.actions.recordStart(id, body)),
  );
};

export default { metadata, tool, handler };
