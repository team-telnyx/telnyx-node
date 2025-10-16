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
  httpPath: '/calls/{call_control_id}/actions/fork_start',
  operationId: 'StartCallFork',
};

export const tool: Tool = {
  name: 'start_forking_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCall forking allows you to stream the media from a call to a specific target in realtime. \nThis stream can be used to enable realtime audio analysis to support a \nvariety of use cases, including fraud detection, or the creation of AI-generated audio responses. \nRequests must specify either the `target` attribute or the `rx` and `tx` attributes.\n\n**Expected Webhooks:**\n\n- `call.fork.started`\n- `call.fork.stopped`\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_start_forking_response',\n  $defs: {\n    action_start_forking_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
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
      rx: {
        type: 'string',
        description:
          "The network target, <udp:ip_address:port>, where the call's incoming RTP media packets should be forwarded.",
      },
      stream_type: {
        type: 'string',
        description:
          'Optionally specify a media type to stream. If `decrypted` selected, Telnyx will decrypt incoming SIP media before forking to the target. `rx` and `tx` are required fields if `decrypted` selected.',
        enum: ['decrypted'],
      },
      tx: {
        type: 'string',
        description:
          "The network target, <udp:ip_address:port>, where the call's outgoing RTP media packets should be forwarded.",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.startForking(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
