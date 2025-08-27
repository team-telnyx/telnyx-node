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
  httpPath: '/calls/{call_control_id}/actions/switch_supervisor_role',
  operationId: 'SwitchSupervisorRole',
};

export const tool: Tool = {
  name: 'switch_supervisor_role_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSwitch the supervisor role for a bridged call. This allows switching between different supervisor modes during an active call\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Call Control Command Response',\n  properties: {\n    data: {\n      $ref: '#/$defs/call_control_command_result'\n    }\n  },\n  $defs: {\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      role: {
        type: 'string',
        description:
          "The supervisor role to switch to. 'barge' allows speaking to both parties, 'whisper' allows speaking to caller only, 'monitor' allows listening only.",
        enum: ['barge', 'whisper', 'monitor'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['call_control_id', 'role'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.calls.actions.switchSupervisorRole(call_control_id, body)),
  );
};

export default { metadata, tool, handler };
