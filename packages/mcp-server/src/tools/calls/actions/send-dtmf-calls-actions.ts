// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/send_dtmf',
  operationId: 'SendDTMF',
};

export const tool: Tool = {
  name: 'send_dtmf_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.\n\n**Expected Webhooks:**\n\nThere are no webhooks associated with this command.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Call Control Command Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/call_control_command_result'\n    }\n  },\n  $defs: {\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      digits: {
        type: 'string',
        description:
          'DTMF digits to send. Valid digits are 0-9, A-D, *, and #. Pauses can be added using w (0.5s) and W (1s).',
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
      duration_millis: {
        type: 'integer',
        description:
          'Specifies for how many milliseconds each digit will be played in the audio stream. Ranges from 100 to 500ms',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id', 'digits'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.sendDtmf(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
