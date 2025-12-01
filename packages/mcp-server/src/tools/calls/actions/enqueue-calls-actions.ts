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
  httpPath: '/calls/{call_control_id}/actions/enqueue',
  operationId: 'EnqueueCall',
};

export const tool: Tool = {
  name: 'enqueue_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPut the call in a queue.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_enqueue_response',\n  $defs: {\n    action_enqueue_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      queue_name: {
        type: 'string',
        description:
          "The name of the queue the call should be put in. If a queue with a given name doesn't exist yet it will be created.",
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
      keep_after_hangup: {
        type: 'boolean',
        description:
          'If set to true, the call will remain in the queue after hangup. In this case bridging to such call will fail with necessary information needed to re-establish the call.',
      },
      max_size: {
        type: 'integer',
        description:
          "The maximum number of calls allowed in the queue at a given time. Can't be modified for an existing queue.",
      },
      max_wait_time_secs: {
        type: 'integer',
        description: 'The number of seconds after which the call will be removed from the queue.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id', 'queue_name'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.calls.actions.enqueue(call_control_id, body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
