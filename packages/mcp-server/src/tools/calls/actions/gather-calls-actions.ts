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
  httpPath: '/calls/{call_control_id}/actions/gather',
  operationId: 'GatherCall',
};

export const tool: Tool = {
  name: 'gather_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGather DTMF signals to build interactive menus.\n\nYou can pass a list of valid digits. The `Answer` command must be issued before the `gather` command.\n\n**Expected Webhooks:**\n\n- `call.dtmf.received` (you may receive many of these webhooks)\n- `call.gather.ended`\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_gather_response',\n  $defs: {\n    action_gather_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
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
      gather_id: {
        type: 'string',
        description:
          'An id that will be sent back in the corresponding `call.gather.ended` webhook. Will be randomly generated if not specified.',
      },
      initial_timeout_millis: {
        type: 'integer',
        description: 'The number of milliseconds to wait for the first DTMF.',
      },
      inter_digit_timeout_millis: {
        type: 'integer',
        description: 'The number of milliseconds to wait for input between digits.',
      },
      maximum_digits: {
        type: 'integer',
        description: 'The maximum number of digits to fetch. This parameter has a maximum value of 128.',
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
        description: 'The number of milliseconds to wait to complete the request.',
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.gather(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
